<template lang="pug">
.workout-card.card-bg
  //- Title
  h2.workout-card__title {{ workouts[dayKey].title }}

  //- Edit button
  button.btn-icon.workout-card__btn-edit(@click='editing = !editing')
    svg.icon(height='24', width='24')
      use(href='#icon_check', v-if='editing')
      use(href='#icon_gear', v-else)

  //- Step list
  .step-list(v-if='!editing')
    //- Rest day (no steps)
    li.rest-day(v-if='!editableSteps.length')
      span.rest-day__title Rest day
      svg.rest-day__icon.icon(height='24', width='24')
        use(href='#icon_yoga')

    //- Step list items
    li.step-list__item(
      v-else,
      v-for='(step, index) in editableSteps',
      :key='step.title'
    )
      span.step-list__count {{ step.count }}
      span.step-list__title {{ step.title }}

  //- Edit list
  draggable.edit-list(
    v-else,
    v-model='editableSteps',
    tag='ol',
    v-bind='draggableOptions',
    draggable='.draggable-item'
  )
    //- Draggable items
    li.edit-list__item.draggable-item(v-for='(step, index) in editableSteps')
      //- Editor
      .edit-list__editor
        WorkoutEditorRow(:step='step', :dayKey='dayKey', :index='index')

    //- Add new
    li.edit-list__item.edit-list__item--add(slot='footer')
      WorkoutEditorRowAddNew(:dayKey='dayKey')
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
    ...mapState(['workouts']),

    editableSteps: {
      get() {
        return this.$store.state.workouts[this.dayKey].steps
      },
      set(value) {
        this.$store.commit('SET_WORKOUT_DAY_STEPS', {
          dayKey: this.dayKey,
          value,
        })
      },
    },
  },
  methods: {
    ...mapMutations(['SET_WORKOUT_DAY_STEPS']),
  },
}
</script>

<style lang="scss" scoped>
.workout-card {
  font-family: var(--ff-heading);
  height: 100%;
  width: 100%;
  user-select: none;
  padding: var(--m) clamp(var(--m), 5vw, var(--m-lg)) var(--m-lg);

  &__title {
    font-size: var(--fs-lg);
    font-family: var(--ff-brand);
  }

  &__btn-edit {
    position: absolute;
    top: var(--m);
    right: clamp(var(--m), 5vw, var(--m-lg));
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
  }
  &__count {
    color: var(--brand-yellow);
    font-variant-numeric: tabular-nums;
  }
  &__title {
    flex: 2;
    color: var(--brand-blue);
  }

  // Rest day
  .rest-day {
    color: var(--gray-10);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
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

/* Draggable Transition
============================= */

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  background-color: var(--c-bg);
  color: var(--c-brand);
}
</style>
