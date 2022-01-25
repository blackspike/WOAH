<template lang="pug">
form.editor(@submit.prevent='createNew')
  //- Count
  select.editor__count(v-model.number='count')
    option(v-for='i in 120', :value='i') {{ i }}

  //- Title
  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor__title(
    required,
    type='text',
    v-model.trim='title',
    placeholder='Add Exercise step'
  )
  //- Add/Delete
  .editor__action
    //- Add
    button.btn-icon.btn-gray.editor__btn-add(
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
