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
      y='280',
      font-variant='tabular-nums',
      :class='{ ending: seconds < 6 }'
    ) {{ seconds }}
</template>

<script>
export default {
  name: 'Timer',
  props: {
    seconds: {
      type: Number,
      default: 30,
    },
  },
}
</script>

<style lang="scss" scoped>
.timer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

// SVG
.number {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;

  &__bg {
    fill: var(--gray-10);
  }
  &__text {
    font-size: var(--fs-9);
    fill: var(--brand-blue);
    font-family: var(--ff-heading);
    transition: fill 1s ease;

    &.ending {
      fill: var(--brand-orange);
    }
  }
}
</style>