<template lang="pug">
section.warmup
  //- Title
  h1.warmup__title(v-show='!started') {{ strings.warmupTitle }}
  //- Ready screen
  .ready(v-show='!started && !finished')
    //- Ready title
    h1.ready__title {{ strings.ready }}

    //- Reminder
    .reminder
      //- Watch icon
      svg.icon.reminder__icon
        use(href='#icon_watch')
      //- Rminder
      h2.reminder__title {{ strings.reminder }}

  //- Finished
  h1.well-done(v-show='finished') {{ strings.finishedMsg }}

  //- Finished button
  nuxt-link.btn.finish-button(v-if='finished', to='/workout') {{ strings.finishedBtn }}

  //- Timer
  .timer-wrapper
    Timer(
      v-show='started',
      :timer='`${timer < 10 ? "0" + timer : timer}`',
      :seconds='seconds'
    )

  //- Steps list
  ol.steps-list(v-if='started')
    li.steps-list__item(
      v-for='(step, index) in steps',
      :class='index === currentStep ? "active" : "inactive"'
    ) {{ step }}

  //- Next step
  .next-up(v-show='currentStep + 1 !== steps.length && started && !finished') {{ strings.next }}
    span {{ steps[currentStep + 1] }}

  //- Controls
  .controls-wrapper
    WarmupControls(
      :started='started',
      :seconds='seconds',
      :finished='finished',
      :speech='speech',
      :noSleepEnabled='noSleepEnabled',
      @startRoutine='startRoutine',
      @prevNext='prevNext',
      @changeSeconds='changeSeconds',
      @restartStep='restartStep',
      @toggleSpeech='speech = !speech',
      @toggleSleep='noSleepEnabled = !noSleepEnabled'
    )
</template>

<script>
import ClickOutside from 'vue-click-outside'
import NoSleep from 'nosleep.js'
import WarmupControls from '../components/WarmupControls.vue'

export default {
  name: 'Warmup',
  directives: {
    ClickOutside,
  },
  components: { WarmupControls },
  data() {
    return {
      cooldownSeconds: 2,
      countdownInterval: null,
      counting: false,
      currentStep: 0,
      finished: false,
      noSleep: null,
      noSleepEnabled: true,
      routineInterval: null,
      seconds: 30,
      speech: true,
      started: false,
      timer: 0,
      steps: [
        'March in place (swing arms)',
        'Jog in place',
        'Jumping jacks',
        'Walking jacks',
        'March with pull down',
        'Lateral step',
        'Opposite hand/toe touches',
        'Lateral butt kicks',
        'Mountain climbers',
        'Jump up & down, side to side',
        'Jump rope',
      ],
      strings: {
        finishedMsg: 'Nice one!',
        finishedBtn: 'Go to workout',
        warmupTitle: 'Warm up',
        ready: 'Ready?',
        reminder: 'Remember to start a workout on your smart watch!',
        next: 'Next',
      },
    }
  },
  watch: {
    currentStep(newStep, prevStep) {
      if (this.finished) {
        this.speak(this.strings.finishedMsg)
      } else {
        this.speak(this.steps[newStep])
      }
    },
    seconds(secs) {
      localStorage.setItem('savedSeconds', secs)
    },
    speech(bool) {
      localStorage.setItem('savedSpeech', bool)
    },
    noSleepEnabled(bool) {
      localStorage.setItem('savedNoSleepEnabled', bool)
    },
  },
  beforeUnmount() {
    this.noSleepEnabled = false
    this.noSleep.disable()
  },
  beforeMount() {
    const savedSeconds = localStorage.getItem('savedSeconds')
    const savedSpeech = localStorage.getItem('savedSpeech')
    const savedNoSleepEnabled = localStorage.getItem('savedNoSleepEnabled')
    if (savedSeconds) {
      this.seconds = parseInt(savedSeconds)
    }
    if (savedSpeech) {
      savedSpeech === 'true' ? (this.speech = true) : (this.speech = false)
    }
    if (savedNoSleepEnabled) {
      savedNoSleepEnabled === 'true'
        ? (this.noSleepEnabled = true)
        : (this.noSleepEnabled = false)
    }
  },
  methods: {
    changeSeconds(seconds) {
      this.seconds = seconds
      this.restartStep()
    },
    enableNoSleep() {
      if (this.noSleepEnabled) {
        this.noSleep = new NoSleep()
        this.noSleep.enable()
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
      console.info('starting...')
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

  &__title {
    grid-area: timer;
    font-size: var(--fs-xxl);
    margin: 0;
  }
}

// Ready

.ready {
  grid-area: timer;
  align-self: center;
  width: 100%;
  &__title {
    color: var(--brand-pink);
    text-align: center;
    font-size: var(--fs-7);
  }
}

// Set watch
.reminder {
  display: flex;
  align-items: center;

  &__icon {
    color: var(--brand-blue);
    width: 14rem;
    height: 7rem;
  }
  &__title {
    color: var(--brand-green);
    font-size: var(--fs-xl);
    margin: 0;
  }
}

// Timer
.timer-wrapper {
  grid-area: timer;
  grid-row: 1 / 3;
  align-self: start;
}

// Done
.well-done {
  grid-area: timer;
  align-self: center;
  text-align: center;
  width: 100%;
  color: var(--brand-pink);
  line-height: 0.8;
}

// Steps list
.steps-list {
  grid-area: timer;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;

  &__item {
    align-items: center;
    background-color: var(--gray);
    border-radius: var(--radius-2);
    color: var(--brand-pink);
    display: flex;
    font-size: var(--fs-xxl);
    justify-content: center;
    padding: var(--m-sm) 0;
    text-align: center;
    min-height: 6rem;
    text-shadow: 0 0.1rem 0.1rem black;

    &.inactive {
      opacity: 0.2;
      display: none;
    }
  }
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
  grid-area: controls;
  width: 100%;
}
</style>
