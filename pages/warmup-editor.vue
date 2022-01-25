<template lang="pug">
section.warmup-editor.card-bg
  p.warmup-editor__title PSST &mdash; Drag steps to rearrange!
  //- Edit
  nuxt-link.btn-icon.warmup-editor__btn-edit(
    to='/warmup',
    aria-label='Back top warmup',
    @click.native='saveEditedSteps'
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
        @updateStep='updateStep',
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
  nuxt-link.btn.warmup-editor__finished(
    to='/warmup',
    @click.native='saveEditedSteps'
  ) Finished editing
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WarmupEditor',
  data() {
    return {
      editing: false,
      editableSteps: [],
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
    // Deep clone so we can change all the steps items
    this.editableSteps = JSON.parse(
      JSON.stringify(this.$store.state.warmup.steps)
    )
  },
  methods: {
    ...mapMutations(['SET_WARMUP_STEPS']),

    // Add editable step
    createStep(newStep) {
      this.editableSteps.push(newStep)
    },

    // Update editable step
    updateStep(newStep) {
      this.editableSteps[newStep.index] = newStep.step
    },

    // delete editable step
    deleteStep(index) {
      this.editableSteps.splice(index, 1)
    },

    // Increase/Decrease all by 1
    incrDecr(incr) {
      this.editableSteps.forEach((step) => {
        // Prevent negative count
        if (!incr && step.count > 1) {
          step.count--
        } else if (incr) {
          step.count++
        }
      })
    },

    // Update vuex
    saveEditedSteps() {
      this.SET_WARMUP_STEPS(this.editableSteps)
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
