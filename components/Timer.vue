<template lang="pug">
.timer
  svg.number(
    xmlns='http://www.w3.org/2000/svg',
    xlink='http://www.w3.org/1999/xlink',
    viewBox='0 0 360 360'
  )
    circle.number__bg(cx='180', cy='180', r='180')
    text.number__text(
      ref='number',
      text-anchor='middle',
      x='180',
      y='250',
      font-variant='tabular-nums',
      :class='{ ending: timer < 6 }'
    ) {{ timer }}

  //- pi
  svg.pi(viewBox='0 0 36 36', xmlns='http://www.w3.org/2000/svg')
    //- defs
    //-   filter#glow
    //-     fegaussianblur.blur(result='coloredBlur', stddeviation='0.2')
    //-     femerge
    //-       femergenode(in='coloredBlur')
    //-       femergenode(in='SourceGraphic')
    path.pi__done(
      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
      fill='none',
      stroke='#EAEAEA',
      stroke-width='.5',
      stroke-linecap='round',
      stroke-dasharray='100, 100'
    )
    path.pi__total(
      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
      fill='none',
      stroke='#444',
      stroke-width='.5',
      stroke-linecap='round',
      :class='{ ending: timer < 6 }',
      :stroke-dasharray='`${percent}, 100`'
    )
  //- pi
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Timer',
  props: ['timer'],
  computed: {
    // Percentage pi
    percent() {
      const parseSecs = parseInt(this.$store.state.warmUp.seconds)
      const parseTimer = parseInt(this.timer)
      const available = parseSecs - parseTimer
      const percentUsed = parseSecs > 0 ? (available / parseSecs) * 100 : 0
      return Math.round(percentUsed)
    },
  },
  methods: {
    ...mapMutations(['SET_SECONDS']),
  },
}
</script>

<style lang="scss" scoped>
.timer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

svg {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
}
@keyframes flasher {
  to {
    opacity: 0.3;
  }
}
.pi {
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
// SVG
.number {
  &__bg {
    fill: var(--gray-10);
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
</style>