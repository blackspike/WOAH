<template lang="pug">
form.editor
  input.editor__count(
    type='number',
    v-model='step.count',
    min='0',
    max='999',
    maxlength='3',
    inputmode='decimal',
    placeholder='00'
  )
  input.editor__title(
    type='text',
    v-model='step.title',
    placeholder='Exercise type'
  )
  //- Add/Delete
  //- Add
  button.btn.editor__btn-add(
    v-if='addNew',
    type='button',
    @click='ADD_STEP({ dayKey, step })'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_plus')

  //- Delete
  button.btn.editor__btn-delete(
    v-else,
    type='button',
    @click='$emit("removeItem", index)'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_trash')
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkoutEditor',
  props: {
    step: {
      type: Object,
      required: true,
    },
    dayKey: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    addNew: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations(['ADD_STEP']),
  },
}
</script>

<style lang="scss" scoped>
.editor {
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-template-areas: 'count title delete drag';
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
