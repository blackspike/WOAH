<template lang="pug">
.editor
  select.editor__count(:value='count', @change='updateStepCount')
    option(v-for='i in 120', :value='i') {{ i }}

  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor__title(
    type='text',
    :value='title',
    @change='updateStepTitle',
    placeholder='Exercise type'
  )

  //- Delete
  .editor__action
    button.btn-icon.btn-gray.editor__btn-delete(
      @click='deleteStep',
      type='button'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_trash')
</template>

<script>
export default {
  name: 'EditorRow',
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    // Call update
    updateStepTitle(e) {
      this.$emit('updateStepTitle', {
        index: this.index,
        title: e.target.value,
      })
    },
    updateStepCount(e) {
      this.$emit('updateStepCount', {
        index: this.index,
        count: Number(e.target.value),
      })
    },
    // Call Delete
    deleteStep() {
      this.$emit('deleteStep', this.index)
    },
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  grid-template-areas: 'count title action';
  gap: var(--m-sm);

  &__count {
    grid-area: count;
    max-width: 5ch;
    height: 100%;
    font-size: var(--fs-lg);
  }

  &__title {
    grid-area: title;
    height: 100%;
    font-size: var(--fs-lg);
  }

  &__action {
    grid-area: action;
  }

  &__btn-add.btn-gray,
  &__btn-delete.btn-gray {
    padding: 0 var(--m-sm);
    height: 100%;
  }
}
</style>
