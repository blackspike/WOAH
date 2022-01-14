<template lang="pug">
.timer
  //- SVG number
  svg.svg-number(
    xmlns='http://www.w3.org/2000/svg',
    xlink='http://www.w3.org/1999/xlink',
    viewBox='0 0 360 360'
  )
    circle.svg-number__bg(cx='180', cy='180', r='180')
    text.svg-number__text(
      ref='number',
      text-anchor='middle',
      x='180',
      y='250',
      font-variant='tabular-nums',
      :class='{ ending: countdown < 6 && countdown !== 0 }'
    ) {{ countdown }}

  //- SVG pi
  svg.svg-pi(
    viewBox='0 0 36 36',
    xmlns='http://www.w3.org/2000/svg',
    v-show='percent'
  )
    path.svg-pi__done(
      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
      fill='none',
      stroke='#EAEAEA',
      stroke-width='.5',
      stroke-linecap='round',
      stroke-dasharray='100, 100'
    )
    path.svg-pi__total(
      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
      fill='none',
      stroke='#444',
      stroke-width='1',
      stroke-linecap='round',
      :class='{ ending: countdown < 6 && countdown !== 0 }',
      :stroke-dasharray='`${percent}, 100`'
    )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CountdownTimer',
  data() {
    return {
      countdown: 0,
      timerInteval: null,
    }
  },
  computed: {
    ...mapState({
      stepDuration: (state) => state.warmup.stepDuration,
      currentStep: (state) => state.warmup.currentStep,
    }),

    // Percentage pi
    percent() {
      const secondsTotal = this.$store.state.warmup.stepDuration
      const secondsLeft = secondsTotal - this.countdown

      return Math.round(
        secondsTotal > 0 ? (secondsLeft / secondsTotal) * 100 : 0
      )
    },
  },
  methods: {
    // Reset timer
    resetTimer() {
      // Reset clock
      clearInterval(this.timerInteval)
      this.countdown = this.stepDuration
    },

    // Countdown timer
    startCountdown() {
      // Reset first
      this.resetTimer()

      // Start clock
      this.timerInteval = setInterval(() => {
        // If not 0, decrease, else clear interval and move on
        if (this.countdown > 0) {
          this.countdown--
        } else if (this.countdown === 0) {
          clearInterval(this.timerInteval)
          this.$emit('countdownFinished')
          console.log('finished!')
        }
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
// Timer
.timer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

// SVGs
.svg-number,
.svg-pi {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
}

// Flasher
@keyframes flasher {
  to {
    opacity: 0.3;
  }
}

// Number
.svg-number {
  &__bg {
    fill: var(--gray-9);
  }
  &__text {
    font-size: var(--fs-8);
    fill: var(--brand-blue);
    transition: fill 1s ease;

    &.ending {
      fill: var(--brand-orange);
      animation-name: flasher;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-out;
    }
  }
}

// Pi
.svg-pi {
  path {
    transition: stroke-dasharray 0.5s;
  }
  &__done {
    stroke: var(--gray-9);
  }
  &__total {
    stroke: var(--brand-green);

    &.ending {
      stroke: var(--brand-orange);
    }
  }
}
</style>