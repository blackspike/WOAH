<template lang="pug">
form.editor(@submit.prevent='submitForm')
  input.editor__count(
    required,
    type='number',
    v-model.number.lazy='count',
    min='0',
    max='999',
    maxlength='3',
    inputmode='decimal',
    placeholder='00'
  )
  input.editor__title(
    required,
    type='text',
    v-model.trim.lazy='title',
    placeholder='Exercise type'
  )
  //- Add/Delete
  //- Add
  button.btn.editor__btn-add(type='submit', @submit.prevent='submitForm')
    svg.icon(height='24', width='24')
      use(href='#icon_plus')
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
      count: null,
    }
  },
  methods: {
    ...mapMutations(['ADD_STEP']),
    // Submit
    submitForm() {
      try {
        this.ADD_STEP({
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
.editor {
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  grid-template-areas: 'count title add';
  gap: var(--m-sm);

  &__title {
    grid-area: title;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__count {
    grid-area: count;
    max-width: 4ch;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__btn-add {
    padding: 0 var(--m-sm);
    height: 100%;
    grid-area: add;
    background-color: var(--gray-9);
    color: var(--brand-blue);
    border: none;

    &:hover,
    &:focus,
    &:active {
      color: var(--gray-9);
      background-color: var(--brand-blue);
    }
  }
}
</style>
