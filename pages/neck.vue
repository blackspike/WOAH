<template lang="pug">
section.neck
  //- Slider
  client-only
    splide.woah-splide(
      :options='splideOptions',
      @splide:move='slideChange',
      ref='neckSplide'
    )
      splide-slide
        .card-start.card-bg
          .card-start__message
            h2.card-start__title {{ strings.startTitle }}
            h3.card-start__subtitle {{ strings.startMsg }}
          a.btn.card-start__btn-action(@click='startNeck') {{ strings.startBtn }}

      splide-slide(
        v-for='(step, index) in steps',
        :key='step.title',
        ref='neckSplides'
      )
        NeckCard(
          ref='neckSplideCard',
          :step='step',
          :index='index',
          :activeSlide='index === currentStep - 1',
          :nextStep='steps[index + 1]',
          @prevNext='prevNext'
        )
      splide-slide
        .card-finished.card-bg
          .card-finished__message
            h2.card-finished__title {{ strings.finishedTitle }}
            h3.card-finished__subtitle {{ strings.finishedMsg }}
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css'
import { mapState } from 'vuex'

export default {
  name: 'Neck',
  data() {
    return {
      currentStep: 0,
      finished: false,
      started: false,
      strings: {
        finishedTitle: 'Neck Finished',
        finishedMsg: 'Nice one!',
        finishedBtn: 'Start neck',
        startTitle: 'Neck start',
        startMsg: 'Ready?',
        startBtn: 'Start neck',
      },
      splideOptions: {
        arrows: false,
        pagination: false,
        start: 0,
        type: 'slide',
        speed: 750,
        padding: { left: '2.5rem', right: '2.5rem' },
        gap: '1.5rem',
        breakpoints: {
          640: {
            gap: '.5rem',
            padding: { left: '1rem', right: '1rem' },
          },
        },
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.neck.steps,
      speech: (state) => state.settings.speech,
      sleep: (state) => state.settings.noSleep,
    }),
  },
  methods: {
    // slideChange
    slideChange(el, newIndex, prevIndex, destIndex) {
      // Update vuex
      this.currentStep = newIndex
      // Speak last step
      if (this.currentStep === this.steps.length) {
        this.speak(this.strings.finishedTitle + ', ' + this.strings.finishedMsg)
      }
    },
    // Start neck button
    startNeck() {
      this.prevNext(true)
    },

    // Prev/Next slidestep
    prevNext(next = true) {
      // Back / forth
      if (next) {
        this.currentStep++
        this.$refs.neckSplide.go('>')
      } else {
        this.currentStep--
        this.$refs.neckSplide.go('<')
      }

      // Stop if last slide
      if (this.currentStep === this.steps.length) {
        this.finished = true
      }
    },

    // Speak
    speak(text) {
      if (!this.speech) return
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(msg)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-start,
.card-finished {
  align-items: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'title' 'button';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  height: 100%;
  justify-content: center;
  padding: var(--m-lg) var(--m);
  user-select: none;

  &__message {
    grid-area: title;
    text-align: center;
  }

  &__title {
    margin-bottom: var(--m);
  }
  &__subtitle {
    color: var(--brand-pink);
    font-size: var(--fs-xxl);
  }
  &__btn-action {
    grid-area: button;

    @include media-query('lg') {
      width: 30vw;
      justify-self: center;
    }
  }
}
</style>
