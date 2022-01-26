<template lang="pug">
.workout-card.card-bg
  //- Header
  header.workout-card__header.workout-card-header
    //- Title
    h2.workout-card-header__title {{ title }}

    //- Edit button
    button.btn-icon.workout-card-header__btn-edit(@click='editing = !editing')
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
        :key='`${step}_${index}`',
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
        v-for='(step, index) of editableSteps',
        :key='`${step}_${index}`'
      )
        //- Editor
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
    button.btn.workout-card-editor__finished(@click='editing = !editing') Finished editing
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'WorkoutCard',
  props: {
    dayKey: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
      draggableOptions: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      },
    }
  },
  computed: {
    ...mapState(['workouts']),

    editableSteps: {
      get() {
        return this.workouts[this.dayKey].steps
      },
      set(value) {
        this.UPDATE_WORKOUT_DAY_STEPS({
          dayKey: this.dayKey,
          steps: value,
        })
      },
    },
  },
  methods: {
    ...mapMutations([
      'UPDATE_WORKOUT_DAY_STEPS',
      'CREATE_WORKOUT_STEP',
      'UPDATE_WORKOUT_STEP_TITLE',
      'UPDATE_WORKOUT_STEP_COUNT',
      'DELETE_WORKOUT_STEP',
      'INCR_DECR_WORKOUT_STEPS',
    ]),

    // Add editable step
    createStep(newStep) {
      this.CREATE_WORKOUT_STEP({
        index: newStep.index,
        title: newStep.title,
        count: newStep.count,
        dayKey: this.dayKey,
      })
    },

    // Update editable step title
    updateStepTitle(newStepTitle) {
      this.UPDATE_WORKOUT_STEP_TITLE({
        index: newStepTitle.index,
        title: newStepTitle.title,
        dayKey: this.dayKey,
      })
    },

    // Update editable step count
    updateStepCount(newStepCount) {
      this.UPDATE_WORKOUT_STEP_COUNT({
        index: newStepCount.index,
        count: newStepCount.count,
        dayKey: this.dayKey,
      })
    },

    // Delete (all but last) editable steps
    deleteStep(index) {
      if (this.editableSteps.length === 1) return

      this.DELETE_WORKOUT_STEP({ index, dayKey: this.dayKey })
    },

    // Increase/Decrease all by 1
    incrDecr(incr) {
      this.INCR_DECR_WORKOUT_STEPS({ incr, dayKey: this.dayKey })
    },
  },
}
</script>

<style lang="scss" scoped>
// Card
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
  align-items: center;
  display: flex;
  justify-content: space-between;

  &__title {
    font-family: var(--ff-brand);
    font-size: var(--fs-lg);
  }

  &__btn-edit {
    background-color: transparent;
    border-color: transparent;
    color: var(--gray-0);
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
  display: flex;
  flex-direction: column;
  gap: var(--m-sm);
  grid-area: list;
  height: 100%;
  line-height: 1;
  padding: 3vh 0;

  &__item {
    align-items: baseline;
    border-radius: var(--radius-2);
    display: flex;
    font-size: var(--fs-xl);
    gap: var(--m-sm);
    overflow: hidden;
    padding: var(--m-sm) var(--m-sm) calc(var(--m-xs) / 1.2);

    @include media-query('md') {
      padding: var(--m) var(--m) calc(var(--m-sm) / 1.2);
    }

    &::before {
      content: '';
      background-color: var(--gray-9);
      bottom: 0;
      left: 0;
      opacity: 0.7;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
    }

    // Single items
    &.single {
      align-items: center;
      flex-direction: column;
      font-size: var(--fs-xxl);
      height: 100%;
      justify-content: center;
      text-align: center;
      width: 100%;

      &::before {
        display: none;
      }
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
    color: var(--brand-blue);
    flex: 2;

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
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
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
    margin-block-start: var(--m-sm);
    padding: 0;
    width: 100%;

    &--add {
      margin-block-start: var(--m-lg);
    }
  }
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

/* Draggable Transition
============================= */

.ghost {
  background-color: var(--c-bg);
  color: var(--c-brand);
}
</style>
