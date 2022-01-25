<template lang="pug">
.workout-card.card-bg
  //- Header
  header.workout-card__header.workout-card-header
    //- Title
    h2.workout-card-header__title {{ $store.state.workouts[dayKey].title }}

    //- Edit button
    button.btn-icon.workout-card-header__btn-edit(@click='saveEditedSteps')
      svg.icon(height='24', width='24')
        use(href='#icon_check', v-if='editing')
        use(href='#icon_gear', v-else)

  //- Content
  .workout-card__content.workout-card-content(v-if='!editing')
    //- Step list
    .workout-card-content__list.step-list
      //- Rest day (no steps)
      li.rest-day(v-if='!editableSteps.length')
        span.rest-day__title Rest day
        svg.rest-day__icon.icon(height='24', width='24')
          use(href='#icon_yoga')

      //- Step list items
      li.step-list__item(
        v-else,
        v-for='(step, index) in editableSteps',
        :key='`${step.title}_${index}`',
        :class='{ single: editableSteps.length === 1 }'
      )
        span.step-list__count {{ step.count }}
        span.step-list__title {{ step.title }}

  //- Editor
  .workout-card__editor.workout-card-editor(v-if='editing')
    //- Edit list
    draggable.workout-card-editor__edit-list.edit-list(
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
        //- Editor
        .edit-list__editor
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
    .workout-card-editor__incr-decr.increase-decrease
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
    button.btn.workout-card-editor__finished(@click='saveEditedSteps') Finished editing
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkoutCard',
  props: {
    dayKey: {
      type: String,
      required: true,
    },
  },
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

  beforeMount() {
    // Deep clone so we can change all the steps items
    const newObj = JSON.parse(
      JSON.stringify(this.$store.state.workouts[this.dayKey].steps)
    )
    console.log(newObj)
    this.editableSteps = [...newObj]
  },
  methods: {
    ...mapMutations(['SET_WORKOUT_DAY_STEPS']),

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
      this.editing = !this.editing

      this.SET_WORKOUT_DAY_STEPS({
        steps: this.editableSteps,
        dayKey: this.dayKey,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.workout-card {
  display: grid;
  font-family: var(--ff-heading);
  grid-template-areas: 'header' 'panel';
  grid-template-rows: auto 1fr;
  height: 100%;
  padding: var(--m) clamp(var(--m), 5vw, var(--m-lg)) var(--m-lg);
  user-select: none;
  width: 100%;

  // Header
  &__header {
    grid-area: header;
  }
  &__content,
  &__editor {
    grid-area: panel;
  }
}

// Header
.workout-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: var(--fs-lg);
    font-family: var(--ff-brand);
  }

  &__btn-edit {
    background-color: transparent;
    color: var(--gray-0);
    border-color: transparent;
    opacity: 0.5;
    padding: 0;

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

// Step list
.step-list {
  grid-area: list;
  display: flex;
  gap: var(--m-sm);
  height: 100%;
  flex-direction: column;
  line-height: 1;
  padding: 3vh 0;

  &__item {
    align-items: baseline;
    background-color: var(--gray-9);
    border-radius: var(--radius-2);
    border: 2px solid var(--gray-9);
    // box-shadow: inset 1px 1px 3px var(--gray-10);
    display: flex;
    font-size: var(--fs-xl);
    gap: var(--m-sm);
    padding: var(--m-sm) var(--m-sm) var(--m-xs);

    // Single items
    &.single {
      align-items: center;
      background-color: transparent;
      border: 0;
      flex-direction: column;
      font-size: var(--fs-xxl);
      height: 100%;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }
  &__count {
    color: var(--brand-yellow);
    font-variant-numeric: tabular-nums;

    .single & {
      font-size: var(--fs-xxxxl);
    }
  }
  &__title {
    flex: 2;
    color: var(--brand-blue);

    .single & {
      flex: unset;
    }
  }

  // Rest day
  .rest-day {
    align-items: center;
    color: var(--gray-10);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    opacity: 0.25;

    &__title {
      font-size: var(--fs-xxxl);
    }
    &__icon.icon {
      height: 30vh;
      width: 30vh;
    }
  }
}

// Editor
.workout-card-editor {
  display: grid;
  grid-template-areas: 'list' 'incr-decr' 'done';
  grid-template-rows: auto 1fr auto;

  @include media-query('md') {
    grid-template-areas: 'list list' 'incr-decr done';
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr auto;
  }

  &__edit-list {
    grid-area: list;
  }
  &__incr-decr {
    align-self: start;
    grid-area: incr-decr;

    @include media-query('md') {
      align-self: center;
    }
  }
  &__finished {
    grid-area: done;
  }
}

// Edit list
.edit-list {
  grid-area: list;
  padding: var(--m) 0;

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
    min-width: 0;
  }
}

/* Draggable Transition
============================= */

.ghost {
  background-color: var(--c-bg);
  color: var(--c-brand);
}
</style>
