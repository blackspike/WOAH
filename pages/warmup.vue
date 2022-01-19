<template lang="pug">
section.warmup
  //- Slider
  client-only
    splide.woah-splide(
      :options='splideOptions',
      @splide:move='slideChange',
      ref='warmupSplide'
    )
      splide-slide(
        v-for='(step, index) in steps',
        :key='step.title',
        ref='warmupSplides'
      )
        WarmupCard(
          ref='warmupSplideCard',
          :step='step',
          :index='index',
          :activeSlide='index === currentStep',
          :nextStep='steps[index + 1]',
          @prevNext='prevNext'
        )
      splide-slide
        .card-finished.card-bg
          .card-finished__message
            h2.card-finished__title {{ strings.finishedTitle }}
            h3.card-finished__subtitle {{ strings.finishedMsg }}
          nuxt-link.btn.card-finished__btn-finished(to='/workout') {{ strings.finishedBtn }}
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css'
import { mapState } from 'vuex'

export default {
  name: 'Warmup',
  data() {
    return {
      currentStep: 0,
      finished: false,
      started: false,
      strings: {
        finishedTitle: 'Warmup Finished',
        finishedMsg: 'Nice one!',
        finishedBtn: 'Start workout',
      },
      splideOptions: {
        arrows: false,
        gap: '.5rem',
        padding: { left: '1rem', right: '1rem' },
        pagination: false,
        start: 0,
        type: 'slide',
        speed: 750,
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.warmup.steps,
      speech: (state) => state.settings.speech,
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

    // Prev/Next slidestep
    prevNext(next = true) {
      // Back / forth
      if (next) {
        this.currentStep++
        this.$refs.warmupSplide.go('>')
      } else {
        this.currentStep--
        this.$refs.warmupSplide.go('<')
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

  &__subtitle {
    color: var(--brand-pink);
    font-size: var(--fs-xxl);
  }
  &__btn-finished {
    grid-area: button;
  }
}
</style>
