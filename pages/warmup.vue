<template lang="pug">
section.warmup
  //- Intro
  .warmup-intro-wrapper
    WarmupIntro(v-show='!started && !finished')

  //- Finished
  h2.finish-message(v-show='finished') {{ strings.finishedMsg }}
  .finish-button-wrapper
    nuxt-link.btn.finish-button(v-if='finished', to='/workout') {{ strings.finishedBtn }}

  //- Timer
  .timer-wrapper
    Timer(v-show='started', :timer='`${timer < 10 ? "0" + timer : timer}`')

  //- Steps list
  .steps-wrapper(v-if='started')
    WarmupSteps(:started='started', :currentStep='currentStep', @test='test')

  //- Next step
  .next-up(v-show='currentStep + 1 !== steps.length && started && !finished') {{ strings.next }}
    span {{ steps[currentStep + 1] }}

  //- Controls
  .controls-wrapper
    WarmupControls(
      :started='started',
      :finished='finished',
      @startRoutine='startRoutine',
      @prevNext='prevNext',
      @restartStep='restartStep'
    )
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'
import NoSleep from 'nosleep.js'

export default {
  name: 'Warmup',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      cooldownSeconds: 2,
      countdownInterval: null,
      counting: false,
      currentStep: 0,
      finished: false,
      noSleepLib: null,
      routineInterval: null,
      started: false,
      timer: 0,
      strings: {
        finishedMsg: 'Nice one!',
        finishedBtn: 'Go to workout',
        next: 'Next',
      },
    }
  },
  computed: {
    ...mapState({
      seconds: (state) => state.warmUp.seconds,
      speech: (state) => state.warmUp.speech,
      noSleep: (state) => state.warmUp.noSleep,
      steps: (state) => state.warmUp.steps,
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
  beforeUnmount() {
    this.noSleepLib.disable()
  },
  methods: {
    ...mapMutations(['SET_SECONDS', 'SET_SPEECH', 'SET_SLEEP']),
    test(val) {
      console.log(val)
    },
    // Enable no sleep
    enableNoSleep() {
      if (this.noSleep) {
        this.noSleepLib = new NoSleep()
        this.noSleepLib.enable()
      }
    },
    speak(text) {
      if (!this.speech) return
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    },
    restartStep() {
      this.reset()
      this.start()
    },
    startRoutine() {
      this.enableNoSleep()
      this.started = true
      this.speak(this.steps[0])
      this.start()
      this.routineInterval = setInterval(() => {
        if (this.currentStep === this.steps.length - 1) {
          this.started = false
          this.currentStep = 0
          clearInterval(this.routineInterval)
          this.finished = true
        } else {
          this.reset()
          this.start()
          this.currentStep++
        }
      }, this.seconds * 1000 + this.cooldownSeconds * 1000)
    },
    reset() {
      console.info('resetting...')
      clearInterval(this.countdownInterval)
      this.counting = false
      this.timer = this.seconds
    },
    prevNext(prevNext) {
      if (this.currentStep === this.steps.length - 1) {
        this.started = false
        this.currentStep = 0
        clearInterval(this.routineInterval)
        this.finished = true
        return
      }
      this.timer = this.seconds
      if (prevNext === 'prev') {
        if (this.currentStep === 0) return
        this.reset()
        this.start()
        this.currentStep--
      } else {
        this.reset()
        this.start()
        this.currentStep++
      }
    },
    start() {
      this.timer = this.seconds
      this.counting = true
      this.countdownInterval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(this.countdownInterval)
          this.counting = false
          return
        }
        this.timer--
      }, 1000)
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
  grid-template-rows: 1fr auto auto;
  grid-template-areas: 'timer' 'next' 'controls';
}

// Intro
.warmup-intro-wrapper {
  grid-area: timer;
  align-self: center;
  width: 100%;
}

// Steps
.steps-wrapper {
  grid-area: timer;
  align-self: end;
}

// Timer
.timer-wrapper {
  grid-area: timer;
  grid-row: 1 / 3;
  align-self: start;
  padding: 0 var(--m);
}

// Done
.finish-message {
  align-self: center;
  color: var(--brand-pink);
  grid-area: timer;
  line-height: 0.8;
  padding: 0 var(--m);
  text-align: center;
  width: 100%;
}
.finish-button-wrapper {
  grid-area: controls;
  padding: 0 var(--m);
}

// Next step
.next-up {
  grid-area: next;
  line-height: 1;
  color: var(--gray-7);
  font-size: var(--fs-lg);
  text-align: center;
  margin-block-end: var(--m);

  span {
    display: inline-block;
    margin-inline: var(--m-sm);
    color: var(--gray-6);
  }
}
// Controls
.controls-wrapper {
  padding: 0 var(--m);
  grid-area: controls;
  width: 100%;
}
</style>
