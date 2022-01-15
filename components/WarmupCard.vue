<template lang="pug">
article.warmup-card
  //- Timer
  .warmup-card__timer-wrapper
    CountdownTimer(
      ref='countdownTimer',
      :time='timerCount',
      :duration='stepDuration',
      :active='activeSlide'
    )

  h2.warmup-card__title {{ step }}

  //- Next step
  .warmup-card__next-up(v-if='nextStep') Next:
    span {{ nextStep }}
  .warmup-card__next-up(v-else)
    span Final step!
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WarmupCard',
  props: {
    step: {
      type: String,
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
      timerCount: 10,
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
        this.speak(this.step)
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
