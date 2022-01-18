<template lang="pug">
.warmup-editor
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
      //- WarmupEditorRowAddNew
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
.workout-card {
  background-color: var(--gray-8);
  border-radius: var(--radius-2);
  box-shadow: var(--bxs-lg);
  font-family: var(--ff-heading);
  height: 100%;
  padding: var(--m);
  width: 100%;

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
  &__drag-icon {
    grid-area: drag;
    height: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;

    &--fake {
      opacity: 0;
    }

    .icon {
      height: 1rem;
      width: 1rem;
      color: var(--gray-7);
      filter: drop-shadow(0 1px 1px var(--gray-9));
    }
  }
}

// Editor

.editor {
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  grid-template-areas: 'count title delete';
  gap: var(--m-sm);

  &__title {
    grid-area: title;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__count {
    grid-area: count;
    max-width: 4ch;
    height: 100%;
    font-size: var(--fs-lg);
  }
  &__btn-add,
  &__btn-delete {
    padding: 0 var(--m-sm);
    height: 100%;
    grid-area: delete;
    background-color: var(--gray-9);
    color: var(--brand-orange);
    border: none;

    &:hover,
    &:focus,
    &:active {
      color: var(--gray-9);
      background-color: var(--brand-orange);
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
