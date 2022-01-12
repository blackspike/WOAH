<template lang="pug">
form.editor
  input.editor__title(type='text', v-model='editorTitle')
  input.editor__count(
    type='number',
    v-model='editorCount',
    min='0',
    max='999',
    maxlength='3',
    inputmode='decimal'
  )
  button.btn.editor__btn-delete(type='button')
    svg.icon(height='24', width='24')
      use(href='#icon_trash')
</template>

<script>
export default {
  name: 'WorkoutEditor',
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editorTitle: '',
      editorCount: 0,
    }
  },
  mounted() {
    this.editorTitle = this.title
    this.editorCount = this.count
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
  &__btn-delete {
    padding: 0 var(--m-sm);
    height: 100%;
    grid-area: delete;
    background-color: var(--gray-9);
    color: var(--brand-orange);
    border: none;
  }
}
</style>
