<template lang="pug">
section.intro.card-bg
  .intro__header
    h1.intro__title Work Out At Home
    p.intro__subtitle Warmup &amp; workout timer

  .intro__start
    nuxt-link.btn.start-button.start-button--warmup(to='/warmup') Start warmup
    nuxt-link.btn.start-button.start-button--workout(to='/workout') Start workout

  .intro__footer
    p Watch the #[nuxt-link(to='/videos') instruction videos]
    p Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
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
  margin: 0 var(--m);
  align-items: center;
  display: grid;
  grid-template-areas: 'header' 'start' 'footer';
  grid-template-rows: 1fr 1fr auto;
  gap: var(--m-lg);
  justify-content: center;
  user-select: none;
  padding: var(--m) var(--m-lg) var(--m-lg);
  font-weight: var(--fw-bd);
  text-transform: uppercase;

  &__header {
    grid-area: header;
  }

  &__title {
    font-size: var(--fs-xxl);
    font-family: var(--ff-brand);
    margin-bottom: var(--m);
  }
  &__subtitle {
    color: var(--brand-yellow);
  }

  &__footer {
    grid-area: footer;
    display: flex;
    flex-direction: column;
    gap: var(--m);
    text-align: center;

    a {
      color: var(--brand-yellow);
    }
  }

  &__start {
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: var(--m);

    .start-button {
      width: 100%;
      display: block;
      margin: auto;
    }
  }
}
</style>
