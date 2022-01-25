<template lang="pug">
form.editor
  //- Count
  select.editor__count(v-model.number='editableCount')
    option(v-for='i in 120', :value='i') {{ i }}

  //- Title
  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor__title(
    type='text',
    v-model.trim='editableTitle',
    placeholder='Exercise type',
    @focus='$event.target.select()'
  )
  //- Delete
  .editor__action
    button.btn-icon.btn-gray.editor__btn-delete(
      @click='removeStep',
      type='button'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_trash')
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkoutEditor',
  props: {
    dayKey: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    editableTitle: {
      get() {
        return this.$store.state.workouts[this.dayKey].steps[this.index].title
      },
      set(value) {
        this.$store.commit('EDIT_WORKOUT_STEP_TITLE', {
          dayKey: this.dayKey,
          index: this.index,
          value,
        })
      },
    },
    editableCount: {
      get() {
        return this.$store.state.workouts[this.dayKey].steps[this.index].count
      },
      set(value) {
        this.$store.commit('EDIT_WORKOUT_STEP_COUNT', {
          dayKey: this.dayKey,
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    ...mapMutations([
      'REMOVE_WORKOUT_STEP',
      'EDIT_WORKOUT_STEP_TITLE',
      'EDIT_WORKOUT_STEP_COUNT',
    ]),
    // Submit
    submitForm() {
      if (this.addNew) {
        this.ADD_WORKOUT_STEP({ dayKey: this.dayKey, step: this.step })
      }
    },
    removeStep() {
      this.REMOVE_WORKOUT_STEP({
        dayKey: this.dayKey,
        index: this.index,
      })
    },
  },
}
</script>

