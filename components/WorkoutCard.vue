<template lang="pug">
.workout-card
  h2.workout-card__title
    | {{ day.title }}
    button.btn.btn-icon.workout-card__btn-edit(@click='editing = !editing')
      svg.icon(height='24', width='24')
        use(href='#icon_x', v-if='editing')
        use(href='#icon_edit', v-else)

  //- Step list
  .step-list(v-if='!editing')
    li.step-list__item(
      v-for='(step, index) in editableSteps',
      :key='step.title'
    )
      span.step-list__count {{ step.count }}
      span.step-list__title {{ step.title }}

  //- Edit list
  draggable.edit-list(
    v-else,
    v-model='editableSteps',
    @start='drag = true',
    @end='dragEnd',
    tag='ol',
    v-bind='draggableOptions'
  )
    transition-group(type='transition', :name='!drag ? "flip-list" : null')
      //- Draggable items
      li.edit-list__item(
        v-for='(step, index) in editableSteps',
        :key='step.title'
      )
        //- Editor
        .edit-list__editor
          WorkoutEditor(
            :count='step.count',
            :title='step.title',
            :index='index',
            @removeStep='removeItem'
          )

        //- drag icon
        .edit-list__drag-icon
          svg.icon
            use(xlink:href='#icon_drag')

    li.edit-list__item.edit-list__item--add(slot='footer')
      //- button.btn.edit-list__btn-add(@click='addItem') Add exercise
      WorkoutEditor(
        :count='0',
        title='',
        :index='0',
        :addNew='true',
        @click='addItem'
      )
      //- drag icon
      .edit-list__drag-icon.edit-list__drag-icon--fake
        svg.icon
          use(xlink:href='#icon_drag')
</template>

<script>
export default {
  name: 'WorkoutCard',
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
      drag: false,
      hasChanged: false,
      currentStep: 0,
      repCount: 3,
      editableSteps: [],
    }
  },
  computed: {
    draggableOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
  mounted() {
    this.editableSteps = this.day.steps
  },
  methods: {
    // Drag end
    dragEnd() {
      this.hasChanged = true
      this.drag = false
    },
    // Add item
    addItem() {
      this.editableSteps.push({
        count: null,
        title: '',
      })
    },
    // Remove item
    removeItem(val) {
      console.log(val)
      const newArr = [...this.editableSteps]
      newArr.splice(val, 1)
      this.editableSteps = newArr
    },
  },
}
</script>

<style lang="scss" scoped>
.workout-card {
  background-color: var(--gray-8);
  box-shadow: var(--bxs-lg);
  padding: var(--m-lg);
  border-radius: var(--radius-2);
  width: 100%;
  height: 100%;

  &__title {
    color: var(--gray-6);
    font-size: var(--fs-xl);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn-edit {
    border: 2px solid var(--gray-9);
  }
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;

  .rep-counter {
    width: 100%;
    font-size: var(--fs-xxl);
    color: var(--brand-blue);
  }
}

// Step list
.step-list {
  grid-area: list;
  align-self: center;
  display: flex;
  gap: 2vh;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;
  padding: 2vh 0;

  &__item {
    padding: 1vh 0;
    display: flex;
    align-items: center;
    gap: var(--m);
    font-size: var(--fs-xl);
  }
  &__step-icon {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;

    .icon {
      height: 2rem;
      width: 2rem;
      color: var(--gray-7);
    }
  }
  &__count {
    color: var(--brand-yellow);
    font-variant-numeric: tabular-nums;
    font-size: var(--fs-xxl);
  }
  &__title {
    flex: 2;
    color: var(--brand-blue);
  }
}
// Edit list
.edit-list {
  grid-area: list;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;
  padding: 2vh 0;

  &__item {
    padding: 0;
    width: 100%;
    display: grid;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'editor drag';
    gap: var(--m-sm);
    align-items: center;

    & + & {
      margin-top: var(--m-sm);
    }

    &--add {
      margin-block-start: var(--m-lg);
    }
  }

  &__editor {
    grid-area: editor;
  }
  &__drag-icon {
    grid-area: drag;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;

    &--fake {
      opacity: 0;
    }

    .icon {
      height: 2rem;
      width: 2rem;
      color: var(--gray-7);
    }
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
