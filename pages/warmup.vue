<template lang="pug">
section.warmup
  //- Finished
  h2.finish-message(v-show='finished') {{ strings.finishedMsg }}
  .finish-button-wrapper(v-show='finished')
    nuxt-link.btn.finish-button(v-if='finished', to='/workout') {{ strings.finishedBtn }}

  //- Steps list
  .warmup-card-wrapper(v-show='!finished')
    //- Slider
    client-only
      splide(
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

  //- Controls
  .controls-wrapper(v-show='started && !finished')
    WarmupControls(:started='started', :finished='finished')

  //- Editor
  //- WarmupEditorCard
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
        padding: '1rem',
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

<style lang="scss" scoped>
.warmup {
  flex: 1;
  width: 100%;
  display: grid;
  gap: var(--m);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas: 'cards' 'controls';
}

// Intro
.warmup-intro-wrapper {
  grid-area: cards;
  align-self: center;
  width: 100%;
}

.start-button-wrapper {
  grid-area: controls;
  padding: 0 var(--m);
  width: 100%;
}
.start-button {
  grid-area: controls;
  width: 100%;
}

// Steps
.warmup-card-wrapper {
  grid-area: cards;
  align-self: center;
  height: 100%;
}

// Timer
.timer-wrapper {
  grid-area: cards;
  grid-row: 1 / 3;
  align-self: start;
  padding: 0 var(--m);
}

// Done
.finish-message {
  align-self: center;
  color: var(--brand-pink);
  grid-area: cards;
  line-height: 0.8;
  padding: 0 var(--m);
  text-align: center;
  width: 100%;
}
.finish-button-wrapper {
  grid-area: controls;
  padding: 0 var(--m);
  width: 100%;
}
.finish-button {
  width: 100%;
  display: block;
}

// Controls
.controls-wrapper {
  padding: 0 var(--m);
  grid-area: controls;
  width: 100%;
}
</style>
