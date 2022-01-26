<template lang="pug">
//- No sleep video
//- It seems this doesn't work on iOS 😔

.no-sleep(v-show='started', :class='{ show: started }')
  video.no-sleep__video(loop, muted, playsinline, ref='sleepVid')
    source(src='/sleep-vid-alt.mp4', type='video/mp4')
</template>

<script>
export default {
  name: 'NoSleep',
  methods: {
    playVideo(play = true) {
      play ? this.$refs.sleepVid.play() : this.$refs.sleepVid.pause()
    },
  },
}
</script>

<style lang="scss" scoped>
// Needs to be wrapped in div for safari positioning
.no-sleep {
  background-color: var(--gray-10);
  border-color: --bran;
  border-radius: var(--radius-5);
  bottom: 1rem;
  height: 32px;
  overflow: hidden;
  padding: var(--m-xs);
  position: fixed;
  right: 2rem;
  width: 32px;
  z-index: var(--layer-5);

  // Anim
  opacity: 0;
  transform: translate(0, 3rem);

  &.show {
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @include media-query('md') {
    bottom: 2rem;
    right: 7vw;
  }
}
</style>
