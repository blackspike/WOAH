<template lang="pug">
article.warmup-card
  //- Timer
  .warmup-card__timer-wrapper
    CountdownTimer(
      ref='countdownTimer',
      v-show='started',
      @countdownFinished='callNextSlide'
    )

  h2.warmup-card__title {{ step }} {{ index }} {{ currentStep }}

  //- Next step
  .warmup-card__next-up Next:
    span {{ getNextStep }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'WarmupCard',
  props: {
    index: {
      type: Number,
      required: true,
    },
    step: {
      type: String,
      required: true,
    },
    started: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {}
  },

  computed: {
    ...mapState({
      steps: (state) => state.warmup.steps,
      currentStep: (state) => state.warmup.currentStep,
    }),
    ...mapGetters(['getNextStep']),
  },
  watch: {
    // If the vuex currentStep changes, start the timer
    currentStep() {
      this.startTimer()
    },
  },
  methods: {
    startTimer() {
      // Start timer if current slide is active
      if (this.index === this.currentStep) {
        this.$refs.countdownTimer.startCountdown()
      }
    },

    // After 2sec cooldown, call for next slide
    callNextSlide() {
      console.log('callNextSlide')
      setTimeout(() => {
        this.$emit('prevNext')
      }, 1000)
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
