<template lang="pug">
section.warmup
  //- Slider
  client-only
    splide.woah-splide(
      :options='splideOptions',
      @splide:moved='slideChange',
      ref='warmupSplide'
    )
      splide-slide(
        v-for='(step, index) in steps',
        :key='step.title',
        ref='warmupSplides'
      )
        WarmupCard(
          ref='warmupSplideCard',
          :started='started',
          :step='step',
          :currentStep='currentStep',
          :index='index',
          :activeSlide='index === currentStep',
          :nextStep='steps[index + 1]',
          @prevNext='prevNext'
        )
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
        finishedMsg: 'Nice one!',
        finishedBtn: 'Go to workout',
      },
      splideOptions: {
        arrows: false,
        gap: '.5rem',
        padding: { left: '1rem', right: '1rem' },
        pagination: false,
        start: 0,
        type: 'slide',
        speed: 500,
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.warmup.steps,
    }),
  },
  methods: {
    // slideChange
    slideChange(el, newIndex, prevIndex, destIndex) {
      // Update vuex
      this.currentStep = newIndex
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
  },
}
</script>
