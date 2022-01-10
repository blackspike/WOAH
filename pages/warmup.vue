<template lang="pug">
section.warmup
  h1.ready(v-show='!started && !finished') Ready?
  h1.well-done(v-show='finished') {{ finishedMsg }}
  button.btn.start-button(
    v-show='!started && !finished',
    @click='startRoutine'
  ) Start
  nuxt-link.btn.finish-button(v-if='finished', to='/workout') Go to workout

  .timer-wrapper
    Timer(
      v-show='started',
      :timer='`${timer < 10 ? "0" + timer : timer}`',
      :seconds='seconds'
    )
    //- .timer(v-show='started')
    //-   .number-huge
    //-     span.number-huge__number {{ timer < 10 ? "0" + timer : timer }}

  ol.list(v-if='started')
    li.list__item(
      v-for='(step, index) in steps',
      :class='index === currentStep ? "active" : "inactive"'
    ) {{ step }}

  .controls(v-show='started')
    button.btn.controls__btn(@click='prevNext("prev")', v-if='started') Back
    button.btn.controls__btn(@click='start', v-if='!started') Start
    //- button.btn.controls__btn(@click='reset', v-if='counting') Reset
    button.btn.controls__btn(@click='prevNext("next")', v-if='started') Skip
</template>

<script>
export default {
  name: 'Warmup',
  data() {
    return {
      timer: 0,
      counting: false,
      countdownInterval: null,
      routineInterval: null,
      seconds: 30,
      cooldownSeconds: 2,
      started: false,
      currentStep: 0,
      finishedMsg: 'Nice one!',
      finished: false,
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
    }
  },
  watch: {
    currentStep(newStep, prevStep) {
      if (this.finished) {
        this.speak(this.finishedMsg)
      } else {
        this.speak(this.steps[newStep])
      }
    },
  },
  methods: {
    speak(text) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    },
    startRoutine() {
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
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--m);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto auto;
  grid-template-areas: 'timer' 'list' 'controls';
}

.timer-wrapper {
  grid-area: timer;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: start;
}

.ready,
.well-done {
  grid-area: timer;
  align-self: center;
  text-align: center;
  width: 100%;
  color: var(--brand-pink);
  line-height: 0.8;
}
.start-button {
  grid-area: controls;
  width: 100%;
}

.timer {
  flex-direction: column;
  text-align: center;
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;

  &__btn {
    width: 100%;
  }
}

.list {
  grid-area: list;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--ff-heading);
  line-height: 1;

  &__item {
    align-items: center;
    background-color: var(--gray);
    border-radius: var(--radius-2);
    color: var(--brand-pink);
    display: flex;
    font-size: var(--fs-xxxl);
    justify-content: center;
    // padding: calc(var(--m) * 1.3) var(--m) var(--m);
    padding: var(--m-sm) 0;
    text-align: center;
    min-height: 7rem;
    text-shadow: 0 0.2rem 0.2rem black;

    // &.active {
    // }
    &.inactive {
      opacity: 0.2;
      display: none;
      @include media-query('md') {
        display: block;
      }
    }
  }
}
</style>
