<template lang="pug">
section.warmup-editor.card-bg
  p.warmup-editor__title PSST &mdash; Drag steps to rearrange!
  //- Edit
  nuxt-link.btn-icon.warmup-editor__btn-edit(
    to='/warmup',
    aria-label='Back top warmup'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_check')

  //- Edit list
  draggable.edit-list(
    v-model='editableSteps',
    tag='ol',
    v-bind='draggableOptions',
    draggable='.draggable-item'
  )
    //- Draggable items
    li.edit-list__item.draggable-item(v-for='(step, index) in editableSteps')
      WarmupEditorRow(:index='index', :type='warmup')

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
  display: grid;
  flex: 0;
  grid-template-areas: 'header' 'list' 'done';
  grid-template-rows: auto 1fr auto;
  margin: 0 var(--m) var(--m-lg);
  padding: var(--m) var(--m);

  &__title {
    color: var(--gray-5);
    font-family: var(--ff-base);
    font-size: var(--fs-xs);

    grid-area: header;
    margin-top: var(--m-xs);
    text-transform: uppercase;
  }
  &__finished {
    grid-area: done;
    margin: var(--m) 0 var(--m);
  }
  &__btn-edit {
    background-color: transparent;
    border-color: transparent;
    color: var(--gray-0);
    opacity: 0.8;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    z-index: var(--layer-2);

    &.active,
    &:hover,
    &:active {
      background-color: transparent;
      opacity: 1;
    }

    &:focus {
      color: var(--gray-0);
      outline-offset: -1px;
    }
  }
}

// Edit list
.edit-list {
  grid-area: list;
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
