<template lang="pug">
.editor
  select.editor__count(v-model.number='editableCount')
    option(v-for='i in 120', :value='i') {{ i }}

  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor__title(
    type='text',
    v-model.trim.lazy='editableTitle',
    placeholder='Exercise type',
    @focus='$event.target.select()'
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
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    editableTitle: {
      get() {
        return this.$store.state.warmup.steps[this.index].title
      },
      set(value) {
        this.$store.commit('EDIT_WARMUP_STEP_TITLE', {
          index: this.index,
          value,
        })
      },
    },
    editableCount: {
      get() {
        return this.$store.state.warmup.steps[this.index].count
      },
      set(value) {
        this.$store.commit('EDIT_WARMUP_STEP_COUNT', {
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    ...mapMutations([
      'REMOVE_WARMUP_STEP',
      'EDIT_WARMUP_STEP_TITLE',
      'EDIT_WARMUP_STEP_COUNT',
    ]),
    // Submit
    submitForm() {
      if (this.addNew) {
        this.ADD_WORKOUT_STEP({ dayKey: this.dayKey, step: this.step })
      }
    },
    removeStep() {
      this.REMOVE_WARMUP_STEP({
        dayKey: this.dayKey,
        index: this.index,
      })
    },
  },
}
</script>
