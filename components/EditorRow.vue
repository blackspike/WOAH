<template lang="pug">
.editor
  select.editor__count(
    v-model.number='count',
    @change='$emit("updateStep", { index, step: { count, title } })'
  )
    option(v-for='i in 120', :value='i') {{ i }}

  label.visually-hidden(for='edit_title') Edit step title
  input#edit_title.editor__title(
    type='text',
    v-model.trim='title',
    @change='$emit("updateStep", { index, step: { count, title } })',
    placeholder='Exercise type',
    @focus='$event.target.select()'
  )

  //- Delete
  .editor__action
    button.btn-icon.btn-gray.editor__btn-delete(
      @click='$emit("deleteStep", index)',
      type='button'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_trash')
</template>

<script>
export default {
  name: 'EditorRow',
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
}
</script>
