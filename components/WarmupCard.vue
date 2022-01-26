<template lang="pug">
article.warmup-card.card-bg
  //- Edit
  nuxt-link.btn-icon.warmup-card__btn-edit(
    to='/warmup-editor',
    aria-label='Edit warmup steps'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_gear')

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
    span.warmup-card__next-up-msg {{ nextStep.title }}
  .warmup-card__next-up-msg(v-else)
    span.warmup-card__next-up Final step!
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
    index: {
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
    return { timerCount: this.$store.state.warmup.steps[this.index].count }
  },
  computed: {
    ...mapState({
      speech: (state) => state.settings.speech,
      stepsLength: (state) => state.warmup.steps.length,
    }),

    stepDuration() {
      return this.$store.state.warmup.steps[this.index].count
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
.warmup-card {
  align-items: center;
  display: grid;
  gap: var(--m);
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
    right: 1rem;
    top: 1rem;
    z-index: var(--layer-2);

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
  }

  &__next-up-msg {
    color: var(--gray-4);
    display: inline-block;
    font-family: var(--ff-heading);
    font-size: var(--fs-xl);
    margin-inline: var(--m-sm);
  }
}
</style>
