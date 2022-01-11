<template lang="pug">
section.intro
  h1.intro__title Work Out At Home

  .intro__text
    p A simple warmup &amp; workout timer
    p Watch the #[nuxt-link(to='/videos') instruction videos] first!
    p Content by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]

  nuxt-link.btn.start-button(to='/warmup') Next
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentPage: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--m);
  align-items: center;
  text-align: center;
  padding-top: 3vh;

  &__text {
    color: var(--brand-yellow);
    font-size: var(--fs-lg);
    display: flex;
    flex-direction: column;
    gap: var(--m);
  }

  .start-button {
    width: 100%;
  }

  .icon {
    height: 8rem;
    width: 8rem;
    color: var(--brand-blue);
  }
}
</style>
