<template lang="pug">

section.workout

  .timer-wrapper


    .timer

      .number-huge
        span.number-huge__unit Rep {{ '#' + repCount}}


    .controls

      //- button.btn-plain.btn-square(@click="next") Next
      button.btn-plain.btn-square(@click="repCount++") +
      button.btn-plain.btn-square(@click="repCount > 0 ? repCount-- : 1") -


  ol.list
    li.list__item {{ step }}
    li.list__item(v-for="step, index in steps" :class="index === currentStep ? 'active' : 'inactive'") {{ step }}

    //- li.list__item #[span.list__count 20] Bodyweight squats
    //- li.list__item #[span.list__count 10] Push-ups
    //- li.list__item #[span.list__count 20] Walking lunges
    //- li.list__item #[span.list__count 10] Dumbbell rows
    //- li.list__item #[span.list__count 15] Second Plank
    //- li.list__item #[span.list__count 30] Jumping jacks


</template>

<script>
export default {
    name: "Warmup",
    data() {
      return {
        currentStep: 0,
        repCount: 3,
        steps: [
          '20 Bodyweight squats',
          '10 Push-ups',
          '20 Walking lunges',
          '10 Dumbbell rows',
          '15 Second Plank',
          '30 Jumping jacks',
        ]
      };
    },
    methods: {
      next() {
        if(this.repCount === 0 && this.currentStep === this.steps.length -1) {
          // this.currentStep = 0
          return
        }


        if(this.currentStep === this.steps.length -1) {
          this.currentStep = 0
          this.repCount--
        }  else {
          this.currentStep++
        }
      }
    }
}
</script>

<style lang="scss" scoped>


.workout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'list' 'timer';

  @include media-query('md'){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'list timer';
  }
}

.timer-wrapper {
  grid-area: timer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: end;
  padding-bottom: var(--m-xl);

  @include media-query('md'){
    align-self: center;
  }
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
}

.list {
  grid-area: list;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--ff-heading);
  line-height: 1;

  &__item {
    display: block;
    padding: var(--m-sm) 0;
    color: var(--c-brand-pink);
    font-size: var(--fs-xxxl);

    @include media-query('md'){
    font-size: var(--fs-xxxxl);

    }

  }
}


</style>
