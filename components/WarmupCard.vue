<template lang="pug">
article.warmup-card
  //- Timer
  .warmup-card__timer-wrapper
    CountdownTimer(
      ref='countdownTimer',
      v-show='started',
      @countdownFinished='callNextSlide'
    )

  h2.warmup-card__title {{ step }}

  //- Next step
  .warmup-card__next-up Next:
    span {{ nextStep }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WarmupCard',
  props: {
    timer: {
      type: null,
      required: true,
    },
    step: {
      type: String,
      required: true,
    },
    nextStep: {
      type: String,
      required: true,
    },
    started: {
      type: Boolean,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      steps: (state) => state.warmUp.steps,
    }),
  },
  methods: {
    startTimer() {
      this.$refs.countdownTimer.startTimer()
    },

    // After 2sec cooldown, call for next slide
    callNextSlide() {
      setTimeout(() => {
        this.$emit('prevNext')
        console.log('callNextSlide')
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
// Steps list
.warmup-card {
  align-items: center;
  background-color: var(--gray-8);
  border-radius: var(--radius-2);
  box-shadow: var(--bxs-lg);
  display: grid;
  height: 100%;
  grid-template-areas: 'timer' 'step';
  grid-template-rows: 2fr 1fr;
  justify-content: center;

  &__timer-wrapper {
    grid-area: timer;
    align-self: center;
    height: 100%;
    padding: var(--m);
  }
  &__title {
    align-items: center;
    background-color: var(--gray);
    border-radius: var(--radius-2);
    color: var(--brand-pink);
    display: flex;
    font-size: var(--fs-xxl);
    grid-area: step;
    justify-content: center;
    height: 100%;
    padding: var(--m);
    text-align: center;
    text-shadow: 0 0.1rem 0.1rem black;
  }

  // Next step
  &__next-up {
    line-height: 1;
    color: var(--gray-7);
    font-size: var(--fs-lg);
    text-align: center;
    margin-block: var(--m);

    span {
      display: inline-block;
      margin-inline: var(--m-sm);
      color: var(--gray-6);
    }
  }
}
</style>
