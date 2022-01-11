<template lang="pug">
.section.videos
  article.videos__wrap
    h2.videos__title.videos__title--warmup Warmup
    .video
      iframe.video-iframe(
        src='https://www.youtube.com/embed/qQ96oXp5RTU',
        title='YouTube video player',
        frameborder='0',
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen
      )

  article.videos__wrap
    h2.videos__title.videos__title--workout Workout
    .video
      iframe.video-iframe(
        src='https://www.youtube.com/embed/qvhHhDNjtxM',
        title='YouTube video player',
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
  width: 100%;
  // gap: var(--m-xl);;
  //
  &__title {
    font-size: var(--fs-xl);
    margin-bottom: var(--m);

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
