<template lang="pug">
section.videos
  //- Vid
  article.video
    h2.video__title.video__title--warmup Warmup tutorial

    lite-youtube.video__iframe(
      videoid='qQ96oXp5RTU',
      playlabel='NerdFitness.com Warmup tutorial',
      params='rel=0&enablejsapi=1'
    )

  //- Vid
  article.video
    h2.video__title.video__title--workout Workout tutorial
    lite-youtube.video__iframe(
      videoid='qvhHhDNjtxM',
      playlabel='NerdFitness.com Workout tutorial',
      params='rel=0&enablejsapi=1'
    )

  //- Vid
  article.video
    h2.video__title.video__title--neck Neck exercises
    lite-youtube.video__iframe(
      videoid='fTUKGwC_-WE',
      playlabel='Neck exercises on YouTube',
      params='rel=0&enablejsapi=1'
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
}

.video {
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
    &--neck {
      color: var(--brand-green);
    }
  }

  &__iframe {
    max-width: none;
    aspect-ratio: 16 / 9;
    background-color: var(--gray-10);
    border-radius: var(--radius-3);
    box-shadow: var(--bxs-md);
    height: auto;
    overflow: hidden;
    width: 100%;
  }
}
</style>
