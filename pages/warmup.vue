<template lang="pug">
section.warmup
  //- Intro
  .warmup-intro-wrapper
    WarmupIntro(v-show='!started && !finished')

  //- Start
  .start-button-wrapper(v-show='!started && !finished')
    button.btn.start-button(@click='startRoutine') {{ strings.startWarmup }}

  //- Finished
  h2.finish-message(v-show='finished') {{ strings.finishedMsg }}
  .finish-button-wrapper(v-show='finished')
    nuxt-link.btn.finish-button(v-if='finished', to='/workout') {{ strings.finishedBtn }}

  //- Steps list
  .warmup-card-wrapper(v-if='started')
    //- Slider
    client-only
      splide(
        :options='splideOptions',
        @splide:move='slideChange',
        ref='warmupSplide'
      )
        splide-slide(v-for='(step, index) in steps', :key='step')
          WarmupCard(
            :started='started',
            :step='step',
            :index='index',
            @prevNext='prevNext'
          )

  //- Controls
  .controls-wrapper(v-show='started && !finished')
    WarmupControls(:started='started', :finished='finished')
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Warmup',
  data() {
    return {
      finished: false,
      started: false,
      strings: {
        finishedMsg: 'Nice one!',
        finishedBtn: 'Go to workout',
        startWarmup: 'Start warmup',
      },
      splideOptions: {
        arrows: false,
        gap: '.5rem',
        keyboard: false,
        padding: '1rem',
        pagination: false,
        start: 0,
        type: 'slide',
      },
    }
  },
  computed: {
    ...mapState({
      stepDuration: (state) => state.warmup.stepDuration,
      speech: (state) => state.settings.speech,
      steps: (state) => state.warmup.steps,
      currentStep: (state) => state.warmup.currentStep,
    }),
  },
  watch: {
    currentStep(newStep, prevStep) {
      if (this.finished) {
        this.speak(this.strings.finishedMsg)
      } else {
        this.speak(this.steps[newStep])
      }
    },
  },
  methods: {
    ...mapMutations([
      'SET_STEP_DURATION',
      'SET_CURRENT_STEP',
      'SET_SPEECH',
      'SET_SLEEP',
    ]),

    // Speak
    speak(text) {
      if (!this.speech) return
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    },

    // Start routine
    startRoutine() {
      this.started = true
      this.SET_CURRENT_STEP(0)
    },

    // slideChange
    slideChange(el, newIndex, prevIndex, destIndex) {
      // Update vuex
      this.SET_CURRENT_STEP(newIndex)
    },

    // Prev/Next slidestep
    prevNext(next = true) {
      console.log('prevNext', next)

      if (next) {
        this.SET_CURRENT_STEP(this.currentStep + 1)
        this.$refs.warmupSplide.go('>')
      } else {
        this.SET_CURRENT_STEP(this.currentStep + -1)
        this.$refs.warmupSplide.go('<')
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
}

// Controls
.controls-wrapper {
  padding: 0 var(--m);
  grid-area: controls;
  width: 100%;
}
</style>
