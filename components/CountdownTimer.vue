<template lang="pug">
.timer
  //- SVG number
  svg.timer__svg.svg-number(
    xmlns='http://www.w3.org/2000/svg',
    xlink='http://www.w3.org/1999/xlink',
    viewBox='0 0 360 360'
  )
    circle.svg-number__bg(cx='180', cy='180', r='180')
    g.svg-number__text-wrapper.needed-for-safari(
      :class='{ active }',
      y='000',
      height='360'
    )
      text.svg-number__text(
        ref='number',
        text-anchor='middle',
        x='180',
        y='260',
        font-variant='tabular-nums',
        :class='{ ending: time < 6 && time !== 0, active }'
      ) {{ time }}

  //- SVG pi
  svg.timer__svg.svg-pi(
    viewBox='0 0 36 36',
    xmlns='http://www.w3.org/2000/svg',
    v-show='percent && active'
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
      :class='{ ending: time < 6 && time !== 0 }',
      :stroke-dasharray='`${percent}, 100`'
    )
</template>

<script>
export default {
  name: 'CountdownTimer',
  props: {
    time: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // Percentage pi
    percent() {
      const secondsTotal = this.duration
      const secondsLeft = secondsTotal - this.time

      return Math.round(
        secondsTotal > 0 ? (secondsLeft / secondsTotal) * 100 : 0
      )
    },
  },
}
</script>

<style lang="scss" scoped>
// Timer
.timer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;

  &__svg {
    margin: auto;
    max-width: 95%;

    @include media-query('md') {
      max-width: 100%;
    }
  }
}

// SVGs
.svg-number,
.svg-pi {
  aspect-ratio: 1 / 1;
  grid-column: 1;
  grid-row: 1;
  height: auto;
  width: 100%;
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

  &__text-wrapper {
    opacity: 0;
    transform: translateY(3rem);
    transition: animation 1s ease-in-out,
      transform 0.5s cubic-bezier(0.87, 0, 0.13, 1),
      opacity 0.5s cubic-bezier(0.87, 0, 0.13, 1);
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__text {
    fill: var(--brand-blue);
    font-family: var(--ff-heading);
    font-size: var(--fs-8);
    transition: animation 1s ease-in-out;

    &.active {
      transform: translateY(0);
    }

    &.ending {
      animation-direction: alternate;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-name: flasher;
      animation-timing-function: ease-out;
      fill: var(--brand-orange);
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