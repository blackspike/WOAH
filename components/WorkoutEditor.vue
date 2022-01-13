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
  button.btn.editor__btn-delete(@click='removeStep', type='button')
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
        return this.$store.state.workOuts[this.dayKey].steps[this.index].title
      },
      set(value) {
        console.log(value)

        this.$store.commit('EDIT_STEP_TITLE', {
          dayKey: this.dayKey,
          index: this.index,
          value,
        })
      },
    },
    editableCount: {
      get() {
        return this.$store.state.workOuts[this.dayKey].steps[this.index].count
      },
      set(value) {
        console.log(value)

        this.$store.commit('EDIT_STEP_COUNT', {
          dayKey: this.dayKey,
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    ...mapMutations(['REMOVE_STEP', 'EDIT_STEP_TITLE', 'EDIT_STEP_COUNT']),
    // Submit
    submitForm() {
      if (this.addNew) {
        this.ADD_STEP({ dayKey: this.dayKey, step: this.step })
      }
    },
    removeStep() {
      this.REMOVE_STEP({
        dayKey: this.dayKey,
        index: this.index,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.editor {
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'count title delete';
  gap: var(--m-sm);
  max-width: 100%;

  &__title {
    grid-area: title;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__count {
    grid-area: count;
    min-width: 4.5ch;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__btn-add,
  &__btn-delete {
    padding: 0 var(--m-sm);
    height: 100%;
    grid-area: delete;
    background-color: var(--gray-9);
    color: var(--brand-orange);
    border: none;

    &:hover,
    &:focus,
    &:active {
      color: var(--gray-9);
      background-color: var(--brand-orange);
    }
  }
}
</style>
