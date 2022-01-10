<template lang="pug">
section.workout
  .controls
    //- button.btn-plain.btn-square(@click="next") Next
    .rep-counter {{ "Rep #" + repCount }}
    button.btn(@click='repCount++') +
    button.btn(@click='repCount > 0 ? repCount-- : 1') -

  ol.list
    li.list__item(
      v-for='(step, index) in steps',
      :class='index === currentStep ? "active" : "inactive"'
    )
      span.list__count {{ step.count }}
      span.list__title {{ step.title }}

    //- li.list__item #[span.list__count 20] Bodyweight squats
    //- li.list__item #[span.list__count 10] Push-ups
    //- li.list__item #[span.list__count 20] Walking lunges
    //- li.list__item #[span.list__count 10] Dumbbell rows
    //- li.list__item #[span.list__count 15] Second Plank
    //- li.list__item #[span.list__count 30] Jumping jacks
</template>

<script>
export default {
  name: 'Warmup',
  data() {
    return {
      currentStep: 0,
      repCount: 3,
      steps: [
        {
          count: 20,
          title: 'Bodyweight squats',
        },
        {
          count: 10,
          title: 'Push-ups',
        },
        {
          count: 20,
          title: 'Walking lunges',
        },
        {
          count: 10,
          title: 'Dumbbell rows × 2',
        },
        {
          count: 15,
          title: 'Second Plank',
        },
        {
          count: 30,
          title: 'Jumping jacks',
        },
      ],
    }
  },
  methods: {
    next() {
      if (this.repCount === 0 && this.currentStep === this.steps.length - 1) {
        // this.currentStep = 0
        return
      }

      if (this.currentStep === this.steps.length - 1) {
        this.currentStep = 0
        this.repCount--
      } else {
        this.currentStep++
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.workout {
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--m);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas: 'list' 'timer';
}

.timer-wrapper {
  grid-area: timer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding-bottom: var(--m-xl);
}

.timer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    font-family: var(--ff-heading);
    color: var(--brand-blue);
  }
}

.list {
  grid-area: list;
  align-self: center;
  display: flex;
  gap: 4vh;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--ff-heading);
  line-height: 1;
  padding: 4vh 0;

  &__item {
    display: flex;
    align-items: center;
    gap: var(--m);
    font-size: var(--fs-xl);
  }
  &__count {
    color: var(--brand-orange);
    font-size: var(--fs-xxl);
  }
  &__title {
    color: var(--brand-yellow);
  }
}
</style>
