<template lang="pug">
article.warmup-card.card-bg
  //- Timer
  .warmup-card__timer-wrapper
    CountdownTimer(
      ref='countdownTimer',
      :time='timerCount',
      :duration='stepDuration',
      :active='activeSlide'
    )

  h2.warmup-card__title {{ step.title }}

  //- Next step
  .warmup-card__next-up(v-if='nextStep') Next up
    span {{ nextStep.title }}
  .warmup-card__next-up(v-else)
    span Final step!
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WarmupCard',
  props: {
    step: {
      type: Object,
      required: true,
    },
    nextStep: {
      type: null,
      required: true,
    },
    activeSlide: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      timerCount: 25,
    }
  },
  computed: {
    ...mapState({
      speech: (state) => state.settings.speech,
      stepDuration: (state) => state.warmup.stepDuration,
    }),
  },
  watch: {
    activeSlide(isActiveSlide) {
      if (isActiveSlide) {
        // Speak step
        this.speak(this.step.title)
        setTimeout(() => {
          this.timerCount--
        }, 1000)
      } else {
        // Reset timer
        this.timerCount = this.stepDuration
      }
    },

    timerCount: {
      handler(timerCountVal) {
        if (timerCountVal > 0 && this.activeSlide) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        } else if (timerCountVal === 0) {
          // Call next slide
          this.callNextSlide()
        }
      },
      // This ensures the watcher is triggered upon creation
      immediate: true,
    },
  },

  methods: {
    // Speak
    speak(text) {
      if (!this.speech) return
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(msg)
    },

    // After 1sec cooldown, call for next slide
    callNextSlide() {
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
  display: grid;
  height: 100%;
  grid-template-areas: 'timer' 'step' 'next';
  grid-template-rows: max-content 1fr auto;
  gap: var(--m);
  justify-content: center;
  user-select: none;
  padding: var(--m-lg) var(--m);

  &__timer-wrapper {
    grid-area: timer;
    align-self: center;
    height: 100%;
  }
  &__title {
    align-items: center;
    background-color: var(--gray);
    border-radius: var(--radius-2);
    color: var(--gray-0);
    display: flex;
    font-size: var(--fs-xxxl);
    grid-area: step;
    justify-content: center;
    height: 100%;
    text-align: center;
  }

  // Next step
  &__next-up {
    grid-area: next;
    line-height: 1;
    color: var(--brand-blue);
    // font-size: var(--fs-lg);
    font-weight: var(--fw-bd);
    text-align: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--m-sm);

    span {
      font-size: var(--fs-xl);
      font-family: var(--ff-heading);
      display: inline-block;
      margin-inline: var(--m-sm);
      color: var(--gray-4);
    }
  }
}
</style>
