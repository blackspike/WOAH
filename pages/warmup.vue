<template lang="pug">
section.warmup
  //- Nosleep
  NoSleep(ref='noSleeper')

  //- Splider
  client-only
    splide.woah-splide(
      :options='splideOptions',
      @splide:move='slideChange',
      ref='warmupSplide'
    )
      //- Start slide
      splide-slide
        .card-start.card-bg
          .card-start__message
            h2.card-start__title {{ strings.startTitle }}
            h3.card-start__subtitle {{ strings.startMsg }}
          a.btn.card-start__btn-action(@mousedown='startWarmup') {{ strings.startBtn }}

      //- Step slides
      splide-slide(
        v-for='(step, index) in steps',
        :key='step.title',
        ref='warmupSplides'
      )
        WarmupCard(
          ref='warmupSplideCard',
          :step='step',
          :index='index',
          :activeSlide='index === currentStep - 1',
          :nextStep='steps[index + 1]',
          @prevNext='prevNext'
        )

      //- Finished slide
      splide-slide
        .card-finished.card-bg
          .card-finished__message
            h2.card-finished__title {{ strings.finishedTitle }}
            h3.card-finished__subtitle {{ strings.finishedMsg }}
          button.btn.card-finished__btn-action(@mousedown='finishWarmup') {{ strings.finishedBtn }}
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
        finishedBtn: 'Go to workout',
        startTitle: 'Warmup start',
        startMsg: "Don't forget to start your smartwatch!",
        startBtn: 'Start warmup',
      },
      splideOptions: {
        arrows: false,
        width: '100%',
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
      if (this.currentStep === this.steps.length + 1) {
        this.speak(this.strings.finishedTitle + ', ' + this.strings.finishedMsg)
      }
    },

    // Start warmup button
    startWarmup() {
      this.$refs.noSleeper.toggleNoSleep(true)
      this.started = true
      this.prevNext(true)
    },

    // Finish warmup button
    finishWarmup() {
      this.$refs.noSleeper.toggleNoSleep(false)

      this.$router.push({
        path: '/workout',
      })
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

      console.log(this.currentStep, this.steps.length + 1)
      // Stop if last slide
      if (this.currentStep === this.steps.length + 1) {
        this.started = false
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
  align-self: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'title' 'button';
  grid-template-rows: auto auto;
  height: 100%;
  justify-content: center;
  max-width: 100vw;
  padding: var(--m-lg) var(--m);
  user-select: none;

  @include media-query('md') {
    padding: var(--m-lg);
  }

  &__message {
    align-self: end;
    grid-area: title;
    text-align: center;
  }

  &__title {
    margin-block-end: var(--m);
  }
  &__subtitle {
    color: var(--brand-pink);
    font-size: var(--fs-xxl);
  }
  &__btn-action {
    align-self: start;
    grid-area: button;

    @include media-query('xs') {
      justify-self: center;
      padding-inline: var(--m-xl);
    }
  }
}
</style>
