<template lang="pug">

.section.videos

  h2 Warmup
  .video

    iframe.video-iframe(src='https://www.youtube.com/embed/qQ96oXp5RTU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)


  h2 Workout
  .video

    iframe.video-iframe(src='https://www.youtube.com/embed/qvhHhDNjtxM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)


</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      currentPage: null
    }
  }
}
</script>

<style lang="scss" scoped>

.videos {
  width: 100%;
  // gap: var(--m-xl);;
}

.video-iframe {
  height: auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: var(--m-xl);
}

</style>
