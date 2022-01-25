<template lang="pug">
section.warmup-editor.card-bg
  //- Header
  header.warmup-editor__header.warmup-editor-header
    //- Title
    p.warmup-editor-header__title PSST &mdash; Drag steps to rearrange!

    //- Edit button
    //- Edit
    nuxt-link.btn-icon.warmup-editor-header__btn-edit(
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
    draggable='.draggable-item',
    @end='dragEnd'
  )
    //- Draggable items
    li.edit-list__item.draggable-item(
      v-for='(step, index) in editableSteps',
      :key='`${step.title}_${index}`'
    )
      EditorRow(
        :index='index',
        :title='step.title',
        :count='step.count',
        @updateStepTitle='updateStepTitle',
        @updateStepCount='updateStepCount',
        @deleteStep='deleteStep'
      )

    //- Add new
    li.edit-list__item.edit-list__item--add(slot='footer')
      EditorRowAddNew(@createStep='createStep')

  //- Increase/Decrease
  .increase-decrease
    //- increase one
    button.btn-icon.btn-gray.increase-decrease__btn-increase(
      type='button',
      @click='incrDecr(true)'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_plus')

    //- increase one
    button.btn-icon.btn-gray.increase-decrease__btn-decrease(
      type='button',
      @click='incrDecr(false)'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_minus')
    span.increase-decrease__label Increase/Decrease all by 1

  //- Finished
  nuxt-link.btn.warmup-editor__finished(to='/warmup') Finished editing
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WarmupEditor',
  data() {
    return {
      editing: false,
      editableSteps: null,
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
  },
  mounted() {
    this.editableSteps = [...this.warmup.steps]
  },
  methods: {
    ...mapMutations([
      'UPDATE_WARMUP_STEPS',
      'CREATE_WARMUP_STEP',
      'UPDATE_WARMUP_STEP_TITLE',
      'UPDATE_WARMUP_STEP_COUNT',
      'DELETE_WARMUP_STEP',
      'INCR_DECR_WARMUP_STEPS',
    ]),

    // Add editable step
    createStep(newStep) {
      this.CREATE_WARMUP_STEP(newStep)
    },

    // Update editable step title
    updateStepTitle(newStepTitle) {
      console.log({ newStepTitle })

      this.UPDATE_WARMUP_STEP_TITLE(newStepTitle)
    },
    // Update editable step count
    updateStepCount(newStepCount) {
      this.UPDATE_WARMUP_STEP_COUNT(newStepCount)
    },

    // delete editable step
    deleteStep(index) {
      this.DELETE_WARMUP_STEP(index)
    },

    // Save on drag
    dragEnd() {
      this.UPDATE_WARMUP_STEPS(this.editableSteps)
    },

    // Increase/Decrease all by 1
    incrDecr(incr) {
      this.INCR_DECR_WARMUP_STEPS(incr)
    },
  },
}
</script>

<style lang="scss" scoped>
.warmup-editor {
  display: grid;
  flex: 0;
  font-family: var(--ff-heading);
  grid-template-areas: 'header' 'list' 'incr-decr' 'done';
  grid-template-rows: auto 1fr auto auto;
  margin: 0 var(--m) var(--m-lg);
  padding: var(--m) var(--m);

  @include media-query('md') {
    grid-template-areas: 'header header' 'list list' 'incr-decr done';
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr auto;
  }

  &__title {
    color: var(--gray-5);
    font-family: var(--ff-base);
    font-size: var(--fs-xs);
    grid-area: header;
    margin-top: var(--m-xs);
    text-transform: uppercase;
  }

  &__incr-decr {
    grid-area: incr-decr;
  }
  &__finished {
    grid-area: done;
    margin: var(--m) 0 var(--m);
  }
}

// Header
.warmup-editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: var(--fs-xs);
    font-family: var(--ff-base);
    opacity: 0.5;
  }

  &__btn-edit {
    background-color: transparent;
    color: var(--gray-0);
    border-color: transparent;
    opacity: 0.5;
    padding: 0 var(--m-sm);

    &:hover,
    &:active {
      background-color: transparent;
      opacity: 1;
    }

    &:focus {
      background-color: transparent;
      color: var(--gray-0);
      outline-offset: -1px;
      opacity: 1;
    }
  }
}

// Edit list
.edit-list {
  grid-area: list;
  padding: var(--m-sm) 0 var(--m);

  &__item {
    list-style: none;
    margin-top: var(--m-sm);
    padding: 0;
    width: 100%;

    &--add {
      margin-block-start: var(--m);
    }
    &--incr-decr {
      margin-block-start: var(--m);
    }
  }

  &__editor {
    grid-area: editor;
    min-width: 0;
  }
}
</style>
