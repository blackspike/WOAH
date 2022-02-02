<template lang="pug">
section.warmup-editor.card-bg
  //- Header
  header.warmup-editor__header.warmup-editor-header
    //- Title
    p.warmup-editor-header__title PSST &mdash; Hold &amp; drag steps to rearrange

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
    draggable='.draggable-item'
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
  .warmup-editor__incr-decr.increase-decrease
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
      draggableOptions: {
        animation: 200,
        ghostClass: 'ghost',
        touchStartThreshold: 4,
      },
    }
  },
  computed: {
    ...mapState(['warmup']),

    editableSteps: {
      get() {
        return this.warmup.steps
      },
      set(value) {
        this.UPDATE_WARMUP_STEPS(value)
      },
    },
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
      this.UPDATE_WARMUP_STEP_TITLE(newStepTitle)
    },

    // Update editable step count
    updateStepCount(newStepCount) {
      this.UPDATE_WARMUP_STEP_COUNT(newStepCount)
    },

    // Delete (all but last) editable steps
    deleteStep(index) {
      if (this.editableSteps.length === 1) return

      this.DELETE_WARMUP_STEP(index)
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
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr auto;
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
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  width: 100%;

  &__title {
    font-family: var(--ff-base);
    font-size: var(--fs-xs);
    opacity: 0.5;
    text-transform: uppercase;
  }

  &__btn-edit {
    background-color: transparent;
    border-color: transparent;
    color: var(--gray-0);
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
      opacity: 1;
      outline-offset: -1px;
    }
  }
}

// Edit list
.edit-list {
  grid-area: list;
  padding: var(--m-sm) 0 var(--m);

  &__item {
    list-style: none;
    margin-block-start: var(--m-sm);
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

// Draggable ghost
.ghost {
  background-color: var(--brand);
  border-radius: var(--radius-2);
  opacity: 0.5;
  padding: var(--m-xs);
}

// Increase/Decrease
.increase-decrease {
  align-items: center;
  display: grid;
  font-size: var(--fs-md);
  gap: var(--m-sm);
  grid-template-areas: 'button button title';
  grid-template-columns: auto auto 1fr;
  margin-block-end: var(--m);

  &__label {
    margin-left: var(--m-sm);
  }
}
</style>
