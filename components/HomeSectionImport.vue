<template lang="pug">
secion.home-section.home-section--about
  //- About
  .home-section__about
    h2.home-section__title Import/export

    p Create and share warmups &amp; workouts &mdash; ideal for personal trainer-devised programs

    p Export your data to back them up or move to another device

    nuxt-link.home-section__cta-btn.btn--sm.btn(to='/settings') Import/Export data

  //- Video
  video.home-section__video(
    loop,
    muted,
    autoplay,
    playsinline,
    ref='importVid'
  )
    source(src='/videos/WOAH_import.mp4', type='video/mp4')
</template>

<script>
export default {
  name: 'HomeSectionImport',
}
</script>

<style lang="scss" scoped>
.home-section {
  align-items: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'about' 'video';
  justify-content: center;
  margin-block: 3vh;
  margin-inline: auto;
  max-width: var(--mw-content-wide);
  padding: 0 var(--m);

  @include media-query('md') {
    grid-template-areas: 'about video';
    grid-template-columns: 1fr 1fr;
  }

  &__about {
    grid-area: about;
    line-height: var(--lh-lg);
    flex-direction: column;
    font-family: var(--ff-sans);

    p {
      margin-block-end: var(--m-lg);
      font-size: var(--fs-lg);
    }
  }

  &__title {
    font-size: var(--fs-xxl);
    margin-block-end: var(--m-lg);
  }

  &__cta-btn {
    display: inline-block;
  }

  &__video {
    grid-area: video;
    margin: 0 auto;
    padding: var(--m-sm);
    max-height: 50vh;
    width: 100%;
    border-radius: var(--radius-3);
    background-color: var(--gray-10);

    @include media-query('md') {
      width: auto;
      max-height: 90vh;
    }
  }
}
</style>
