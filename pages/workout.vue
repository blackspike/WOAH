<template lang="pug">

section.workout

  .rep-wrapper


    .count.number-huge
      span.number-huge__unit Rep
      span.number-huge__number {{repCount}}


    .controls

      //- button.btn-plain.btn-square(@click="next") Next
      button.btn-plain.btn-square(@click="repCount++") +
      button.btn-plain.btn-square(@click="repCount > 0 ? repCount-- : 1") -

  .list-wrapper

    ol.list.list--lg
      //- li.list__item {{ step }}
      //- li.list__item(v-for="step, index in steps" :class="index === currentStep ? 'active' : 'inactive'") {{ step }}

      li.list__item #[span.list__count 20] Bodyweight squats
      li.list__item #[span.list__count 10] Push-ups
      li.list__item #[span.list__count 20] Walking lunges
      li.list__item #[span.list__count 10] Dumbbell rows
      li.list__item #[span.list__count 15] Second Plank
      li.list__item #[span.list__count 30] Jumping jacks


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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr ;
  grid-template-areas: 'list timer';
  gap: 2rem;
}

.rep-wrapper {
  height: 100%;
  grid-area: timer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'counter' 'controls';
  gap: var(--m);
  justify-content: end;
  align-items: center;
}
.list-wrapper {
  align-self: center;
}
.count {
  grid-area: counter;
}

.controls {
  grid-area: controls;
  display: flex;
  gap: var(--m-xl);
  padding-bottom: var(--m-xl);
}

</style>
