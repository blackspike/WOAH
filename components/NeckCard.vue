<template lang="pug">
article.neck-card.card-bg
  //- Timer
  .neck-card__timer-wrapper
    CountdownTimer(
      ref='countdownTimer',
      :time='timerCount',
      :duration='stepDuration',
      :active='activeSlide'
    )

  h2.neck-card__title {{ step.title }}

  //- Next step
  .neck-card__next-up Rep {{ currentRep }} of {{ reps }}
    span Step {{ index + 1 }} of {{ stepsLength }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NeckCard',
  props: {
    step: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    currentRep: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
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
    return { timerCount: this.$store.state.neck.steps[this.index].count }
  },
  computed: {
    ...mapState({
      speech: (state) => state.settings.speech,
      stepsLength: (state) => state.neck.steps.length,
    }),

    stepDuration() {
      return this.$store.state.neck.steps[this.index].count
    },
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
.neck-card {
  align-items: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'timer' 'step' 'next';
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr auto;
  height: 100%;
  justify-content: center;
  padding: var(--m-lg) clamp(var(--m), 5vw, var(--m-lg));
  user-select: none;

  @include media-query('lg') {
    grid-template-areas: 'timer step' 'timer next';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
  }

  &__timer-wrapper {
    align-self: center;
    grid-area: timer;
    height: 100%;
  }
  &__title {
    align-items: center;
    border-radius: var(--radius-2);
    color: var(--gray-0);
    display: flex;
    font-size: clamp(3rem, 7vw + 2rem, 5rem);
    grid-area: step;
    height: 100%;
    justify-content: center;
    text-align: center;

    @include media-query('lg') {
      font-size: var(--fs-xxxl);
    }
  }

  &__btn-edit {
    background-color: transparent;
    border-color: transparent;
    color: var(--gray-0);
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 0;

    &.active,
    &:hover,
    &:active {
      background-color: transparent;
      opacity: 1;
    }

    &:focus {
      color: var(--gray-0);
      outline-offset: -1px;
    }
  }

  // Next step
  &__next-up {
    color: var(--brand-blue);
    display: flex;
    flex-direction: column;
    gap: var(--m-sm);
    grid-area: next;
    justify-content: center;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;

    @include media-query('lg') {
      margin-block-end: var(--m-lg);
    }

    span {
      color: var(--gray-4);
      display: inline-block;
      font-family: var(--ff-heading);
      font-size: var(--fs-xl);
      margin-inline: var(--m-sm);
    }
  }
}
</style>

