<template lang="pug">
section.intro
  .intro__content
    h1.intro__title Work Out At Home

    .intro__text
      p A simple warmup &amp; workout timer
      p Watch the #[nuxt-link(to='/videos') instruction videos] first!
      p Content by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]

  //- Intro
  .warmup-intro-wrapper
    WarmupIntro

  nuxt-link.btn.start-button(to='/warmup') Start warmup
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentPage: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--m);
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 var(--m);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  &__title {
    font-size: var(--fs-xxxl);
  }

  &__text {
    color: var(--brand-yellow);
    display: flex;
    flex-direction: column;
    font-size: var(--fs-lg);
    gap: var(--m);
  }

  .start-button {
    width: 100%;
  }
}
</style>
