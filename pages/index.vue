<template lang="pug">
section.intro
  picture.intro__screengrabs
    source(
      type='image/avif',
      srcset='~/assets/img/screengrabs/screengrab-tall-smol.avif'
    )
    source(
      type='image/webp',
      srcset='~/assets/img/screengrabs/screengrab-tall-smol.webp'
    )
    img(alt='', src='~/assets/img/screengrabs/screengrab-tall-smol.png')

  .intro__header
    h1.intro__title Work Out At Home
    p.intro__subtitle Warmup &amp; workout timer

  .intro__actions
    nuxt-link.btn.action-button.action-button--warmup(to='/warmup') Start warmup
    nuxt-link.btn.action-button.action-button--workout(to='/workout') Start workout
    nuxt-link.btn.action-button.action-button--workout(to='/videos') Video tutorials

  .intro__footer
    p Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
    p #[nuxt-link(to='/about') About this app]
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.intro {
  align-items: center;
  display: grid;
  font-weight: var(--fw-bd);
  gap: var(--m-lg);
  grid-template-areas: 'header' 'start' 'footer';
  grid-template-rows: 1fr 1fr auto;
  height: 100%;
  margin: 0 auto;
  padding: var(--m);
  max-width: var(--mw-content-wide);
  text-transform: uppercase;
  user-select: none;

  @include media-query('lg') {
    gap: var(--m-xl);
  }

  &__header {
    grid-area: header;
    text-shadow: 0 0 5rem rgba(0, 0, 0, 0.8);
  }

  &__screengrabs {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.5;

    @include media-query('lg') {
      opacity: 1;
      margin-top: 2vh;
    }
  }

  &__title {
    font-size: clamp(3rem, 10vw + 2rem, 10.5rem);
    font-family: var(--ff-brand);
    margin: var(--m-xl) 0 var(--m);

    // @include media-query('lg') {

    // }
  }

  &__subtitle {
    color: var(--brand-yellow);
    font-size: clamp(1rem, 1.5vw + 1rem, 3rem);
  }

  &__footer {
    grid-area: footer;
    display: flex;
    flex-direction: column;
    gap: var(--m);

    a {
      color: var(--brand-yellow);
    }
  }

  &__actions {
    align-self: start;
    display: grid;
    grid-auto-flow: row;
    gap: var(--m);

    // @include media-query('lg') {
    //   grid-auto-flow: column;
    //   min-height: 220px;
    // }
  }
  .action-button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @include media-query('lg') {
      width: clamp(20rem, 50vw, 30rem);
      box-shadow: var(--bxs-lg);
      margin: 0 auto 0 0;
    }
  }
}
</style>
