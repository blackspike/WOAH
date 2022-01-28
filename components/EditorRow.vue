<template lang="pug">
.editor
  .editor__count.select-container
    select(:value='count', @change='updateStepCount')
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
  gap: var(--m-sm);
  grid-template-areas: 'count title action';
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);

  &__count {
    font-size: var(--fs-lg);
    grid-area: count;
    height: 100%;
    max-width: 5ch;
  }

  &__title {
    font-size: var(--fs-lg);
    grid-area: title;
    height: 100%;
  }

  &__action {
    grid-area: action;
  }

  &__btn-add.btn-gray,
  &__btn-delete.btn-gray {
    color: var(--brand-orange);
    height: 100%;
    padding: 0 var(--m-sm);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--brand-orange);
      color: var(--gray-10);
    }
  }
}
</style>
