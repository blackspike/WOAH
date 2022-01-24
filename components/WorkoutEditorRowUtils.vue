<template lang="pug">
.utils
  //- Add row
  form.editor(@submit.prevent='submitForm')
    //- Count
    select.editor__count(v-model.number='count')
      option(v-for='i in 120', :value='i') {{ i }}

    //- Title
    label.visually-hidden(for='edit_title') Edit step title
    input#edit_title.editor__title(
      required,
      type='text',
      v-model.trim.lazy='title',
      placeholder='Add Exercise step'
    )

    //- Add/Delete
    .editor__action
      //- Add
      button.btn-icon.btn-gray.editor__btn-add(
        type='submit',
        @submit.prevent='submitForm'
      )
        svg.icon(height='24', width='24')
          use(href='#icon_plus')

  //- Increase/Decrease
  .increase-decrease
    //- increase one
    button.btn-icon.btn-gray.increase-decrease__btn-increase(
      type='button',
      @click='INCR_DECR_WORKOUT_STEPS({ dayKey, incr: true })'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
    //- increase one
    button.btn-icon.btn-gray.increase-decrease__btn-decrease(
      type='button',
      @click='INCR_DECR_WORKOUT_STEPS({ dayKey, incr: false })'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_minus')
    span.increase-decrease__label Increase/Decrease all by 1
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkoutEditorAddNew',
  props: {
    dayKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      count: 20,
    }
  },
  methods: {
    ...mapMutations(['ADD_WORKOUT_STEP', 'INCR_DECR_WORKOUT_STEPS']),
    // Submit
    submitForm() {
      try {
        this.ADD_WORKOUT_STEP({
          dayKey: this.dayKey,
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

<style lang="scss" scoped>
.utils {
  .increase-decrease {
    margin-top: var(--m);
  }
}
</style>
