<template lang="pug">
form.editor
  input.editor__count(
    type='number',
    v-model.number.lazy='editableCount',
    min='0',
    max='999',
    maxlength='3',
    inputmode='decimal',
    placeholder='00'
  )
  input.editor__title(
    type='text',
    v-model.trim.lazy='editableTitle',
    placeholder='Exercise type'
  )
  //- Delete
  .editor__action
    button.btn-icon.editor__btn-delete(@click='removeStep', type='button')
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
      required: true,
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

