<template lang="pug">
form.editor(@submit.prevent='submitForm')
  //- Count
  select.editor__count(v-model.number='count')
    option(v-for='i in 120', :value='i') {{ i }}

  //- Title
  input.editor__title(
    required,
    type='text',
    v-model.trim.lazy='title',
    placeholder='Add Exercise step'
  )
  //- Add/Delete
  .editor__action
    //- Add
    button.btn-icon.editor__btn-add(
      type='submit',
      @submit.prevent='submitForm'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkoutEditorAddNew',
  data() {
    return {
      title: '',
      count: null,
    }
  },
  methods: {
    ...mapMutations(['ADD_WARMUP_STEP']),
    // Submit
    submitForm() {
      try {
        this.ADD_WARMUP_STEP({
          count: this.count,
          title: this.title,
        })
        this.title = ''
        this.count = null
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
