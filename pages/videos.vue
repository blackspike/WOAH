<template lang="pug">
section.videos
  article.videos__wrap
    h2.videos__title.videos__title--warmup Warmup tutorial
    .video
      iframe.video-iframe(
        src='https://www.youtube.com/embed/qQ96oXp5RTU',
        title='Warmup tutorial on YouTube',
        frameborder='0',
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen
      )

  article.videos__wrap
    h2.videos__title.videos__title--workout Workout tutorial
    .video
      iframe.video-iframe(
        src='https://www.youtube.com/embed/qvhHhDNjtxM',
        title='Workout tutorial on YouTube',
        frameborder='0',
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen
      )
  article.videos__wrap
    h2.videos__title.videos__title--workout Neck exercises
    .video
      iframe.video-iframe(
        src='https://www.youtube.com/embed/fTUKGwC_-WE',
        title='Neck exercises on YouTube',
        frameborder='0',
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen
      )
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      currentPage: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.videos {
  display: flex;
  flex-direction: column;
  gap: var(--m-lg);
  margin: auto;
  max-width: var(--mw-content-wide);
  padding: 0 var(--m) var(--m-xl);
  width: 100%;

  &__title {
    font-size: var(--fs-xl);
    margin: var(--m) 0;

    &--warmup {
      color: var(--brand-yellow);
    }
    &--workout {
      color: var(--brand-pink);
    }
  }
}

.video-iframe {
  height: auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--gray-10);
  border-radius: var(--radius-2);
  box-shadow: var(--bxs-md);
  overflow: hidden;
}
</style>
