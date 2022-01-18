<template lang="pug">
.warmup-editor.card-bg
  h2.warmup-editor__title Drag steps to rearrange
  //- Edit list
  draggable.edit-list(
    v-model='editableSteps',
    tag='ol',
    v-bind='draggableOptions',
    draggable='.draggable-item'
  )
    //- Draggable items
    li.edit-list__item.draggable-item(v-for='(step, index) in editableSteps')
      WarmupEditorRow(:index='index')

    li.edit-list__item.edit-list__item--add(slot='footer')
      WarmupEditorRowAddNew

  nuxt-link.btn.warmup-editor__finished(to='/warmup') Finished editing
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WarmupEditor',
  data() {
    return {
      editing: false,
      repCount: 3,
      draggableOptions: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      },
    }
  },
  computed: {
    ...mapState(['warmup']),

    editableSteps: {
      get() {
        console.log(this.warmup)
        return this.warmup.steps
      },
      set(value) {
        this.$store.commit('SET_WARMUP_STEPS', value)
      },
    },
  },
  methods: {
    ...mapMutations(['SET_WARMUP_STEPS']),
  },
}
</script>

<style lang="scss" scoped>
.warmup-editor {
  padding: var(--m-lg) var(--m);
  margin: 0 var(--m);
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header' 'list' 'done';

  &__title {
    grid-area: header;
    font-family: var(--ff-base);
    text-transform: uppercase;
    font-size: var(--fs-sm);
  }
  &__finished {
    grid-area: done;
    margin-top: var(--m);
  }
}

// Edit list
.edit-list {
  grid-area: list;
  align-self: center;
  padding: 2vh 0;

  &__item {
    list-style: none;
    margin-top: var(--m-sm);
    padding: 0;
    width: 100%;

    &--add {
      margin-block-start: var(--m-lg);
    }
  }

  &__editor {
    grid-area: editor;
    min-width: 0;
  }
}
</style>
