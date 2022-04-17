<template lang="pug">
.editor
  .editor__step
    .editor__count {{ count }}

    .editor__title {{ title }}

  //- Delete
  .editor__action
    button.btn-icon.btn-gray.editor__btn-delete(
      @click='deleteStep',
      type='button'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_trash')
</template>

<script>
export default {
  name: 'EditorRowBasic',
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    // Call Delete
    deleteStep() {
      this.$emit('deleteStep', this.index)
    },
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  gap: var(--m-sm);
  grid-template-areas: 'step action';
  grid-template-columns: minmax(0, 1fr) minmax(0, auto);

  &__step {
    grid-area: step;
    align-items: center;
    background-color: var(--gray-9);
    border-radius: var(--radius-2);
    display: grid;
    font-size: var(--fs-lg);
    gap: 0 var(--m);
    grid-template-areas: 'count title';
    grid-template-columns: 3ch 1fr;
    justify-content: center;
  }
  &__count {
    grid-area: count;
    color: var(--brand-yellow);
    font-variant-numeric: tabular-nums;
    text-align: right;
    padding: var(--m-sm) var(--m-sm) var(--m-xs) var(--m);
  }
  &__title {
    color: var(--brand-blue);
    margin-inline-start: var(--m-sm);
    display: flex;
    grid-area: title;
    height: 100%;
    line-height: 1;
    width: 100%;
    padding: var(--m-sm) var(--m-sm) var(--m-xs) 0;
  }

  &__action {
    grid-area: action;
  }

  &__btn-add.btn-gray,
  &__btn-delete.btn-gray {
    color: var(--brand-orange);
    height: 100%;
    padding: 0 var(--m-sm);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--brand-orange);
      color: var(--gray-10);
    }
  }
}
</style>
