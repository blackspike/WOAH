<template lang="pug">
form.editor-add(@submit.prevent='createNew')
  //- Count
  select.editor-add__count(v-model.number='count')
    option(v-for='i in 120', :value='i') {{ i }}

  //- Title
  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor-add__title(
    required,
    type='text',
    v-model.trim='title',
    placeholder='Add Exercise step'
  )
  //- Add/Delete
  .editor-add__action
    //- Add
    button.btn-icon.btn-gray.editor-add__btn-add(
      type='submit',
      @submit.prevent='createNew'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
</template>

<script>
export default {
  name: 'EditorRowAddNew',
  data() {
    return {
      title: '',
      count: 20,
    }
  },
  methods: {
    // Submit
    createNew() {
      try {
        this.$emit('createStep', {
          count: this.count,
          title: this.title,
        })
        this.title = ''
        this.count = 20
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.editor-add {
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