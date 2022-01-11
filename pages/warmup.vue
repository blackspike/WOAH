<template lang="pug">
section.warmup
  h1.warmup__title(v-show='!started') Warmup
  //- Ready screen
  .ready(v-show='!started && !finished')
    h1.ready__title Ready?
    .reminder
      svg.icon.reminder__icon
        use(href='#icon_watch')
      h2.reminder__title Remember to start a workout on your smart watch!

  //- Finished
  h1.well-done(v-show='finished') {{ finishedMsg }}

  nuxt-link.btn.finish-button(v-if='finished', to='/workout') Go to workout

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
  .next-up(v-show='currentStep + 1 !== steps.length && started && !finished') Next
    span {{ steps[currentStep + 1] }}

  //- Controls
  .controls
    button.btn.controls__btn(@click='prevNext("prev")', v-if='started') Back
    button.btn.start-button(
      v-show='!started && !finished',
      @click='startRoutine'
    ) Start warmup
    button.btn.controls__btn.controls__btn--settings(
      @click='settingsOpen = !settingsOpen',
      v-if='started'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_gear')
    button.btn.controls__btn(@click='prevNext("next")', v-if='started') Skip

    //- Settings menu
    aside.settings(v-if='settingsOpen')
      //- Title
      h2.settings__title
        | Settings
        button.btn.btn-icon.settings__menu-btn(@click='settingsOpen = false')
          svg.icon(height='24', width='24')
            use(href='#icon_x', v-if='settingsOpen')
            use(href='#icon_menu', v-else)

      //- Duration
      .settings__row
        label(for='set_seconds') Step duration
          span.seconds {{ seconds }}
            span.s s
        //- ({{ (seconds / 60).toFixed(2) }} mins)
        input#set_seconds(
          type='range',
          v-model='seconds',
          @change='restartStep()',
          min='10',
          max='120',
          step='5'
        )
      //- Speech
      .settings__row
        label(for='set_speech')
          | Announce steps?
          input#set_speech(
            type='checkbox',
            v-model='speech',
            @change='restartStep()'
          )
</template>

<script>
import ClickOutside from 'vue-click-outside'
import NoSleep from 'nosleep.js'

export default {
  name: 'Warmup',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      settingsOpen: false,
      timer: 0,
      speech: true,
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
  beforeMount() {
    const savedSeconds = localStorage.getItem('savedSeconds')
    const savedSpeech = localStorage.getItem('savedSpeech')
    if (savedSeconds) {
      this.seconds = parseInt(savedSeconds)
    }
    if (savedSpeech) {
      savedSpeech === 'true' ? (this.speech = true) : (this.speech = false)
    }
  },

  methods: {
    saveSettings() {
      localStorage.setItem('savedSeconds', this.seconds)
      localStorage.setItem('savedSpeech', this.speech)
    },
    enableNoSleep() {
      const noSleep = new NoSleep()
      noSleep.enable()
    },
    speak(text) {
      if (!this.speech) return
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    },

    restartStep() {
      this.saveSettings()
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
  user-select: none;

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
.start-button {
  width: 100%;
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
.controls {
  position: relative;
  grid-area: controls;
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;

  &__btn {
    width: 100%;

    &--settings {
      width: auto;
    }
  }
}

// Settings
.settings {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  display: flex;
  font-size: var(--fs-lg);
  flex-direction: column;
  gap: var(--m-lg);
  width: 100%;
  bottom: calc(100% + var(--m));
  grid-area: mobile-nav;
  box-shadow: var(--bxs-lg);
  padding: var(--m-lg);
  border-radius: var(--radius-2);

  &__title {
    font-size: var(--fs-xxl);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
  &__menu-btn {
    justify-content: flex-end;
    background-color: var(--gray-8);
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: var(--m-sm);
    font-variant: tabular-nums;
  }

  label {
    font-size: var(--fs-xl);
    color: var(--brand-yellow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--m-sm);
  }

  input[type='checkbox'] {
    transform: scale(2);
  }

  .seconds {
    color: var(--gray-0);
  }

  .s {
    font-size: var(--fs-lg);
  }
}
</style>
