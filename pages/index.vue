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

  //- Header
  header.intro__header
    //- Title
    h1.intro__title
      span.spanimation Work
      span.spanimation Out
      span.spanimation At
      span.spanimation Home

    p.intro__subtitle Warmup &amp; workout timer

  //- Actions list
  ul.actions.intro__actions
    li.actions__item
      nuxt-link.btn.actions__button(to='/warmup') Start warmup
    li.actions__item
      nuxt-link.btn.actions__button(to='/workout') Start workout
    li.actions__item
      nuxt-link.btn.actions__button(to='/videos') Video tutorials
    li.actions__item.actions__item--credits
      .credits
        span Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
        span Web App by #[nuxt-link(to='/about') Blackspike.com]

  .intro__footer.credits
    span Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
    span Web App by #[nuxt-link(to='/about') Blackspike.com]
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
// Intro
.intro {
  align-items: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'header' 'start' 'footer';
  grid-template-rows: auto 1fr auto;
  height: 100%;
  margin: 0 auto;
  padding: var(--m);
  max-width: var(--mw-content);
  text-transform: uppercase;

  @include media-query('lg') {
    gap: var(--m-xl);
    max-width: var(--mw-content-wide);
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
    animation: bobbing 10s ease-in-out infinite;

    @include media-query('lg') {
      opacity: 1;
      margin-top: 2vh;
    }
  }

  &__title {
    font-size: clamp(3rem, 10vw + 2rem, 10.5rem);
    font-family: var(--ff-brand);
    margin: 5vh 0 var(--m-lg);
    display: flex;
    flex-wrap: wrap;
    gap: 0 var(--m);

    .spanimation {
      opacity: 0;
      transform: translate(0, 3rem);
      animation: drop-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

      &:nth-child(1) {
        animation-delay: 0.25s;
      }
      &:nth-child(2) {
        animation-delay: 0.35s;
      }
      &:nth-child(3) {
        animation-delay: 0.5s;
      }
      &:nth-child(4) {
        animation-delay: 0.65s;
      }
    }
  }

  &__subtitle {
    opacity: 0;
    transform: translate(0, -5rem);
    color: var(--brand-yellow);
    font-size: clamp(1rem, 1.5vw + 1rem, 3rem);
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: 0.95s;
  }

  &__footer {
    grid-area: footer;

    &.credits {
      display: none;

      @include media-query('lg') {
        display: flex;
      }
    }
  }
}

// Credits
.credits {
  background-color: var(--gray-10);
  border-radius: var(--radius-3);
  color: var(--gray-6);
  display: flex;
  flex-direction: column;
  font-size: var(--fs-sm);
  gap: var(--m);
  margin-top: var(--m);
  align-items: center;
  opacity: 0.8;
  padding: var(--m-lg);
  transition: opacity 0.2s ease;

  @include media-query('lg') {
    flex-direction: row;
    opacity: 0.4;
    margin: var(--m-xxl) 0;
    border-radius: var(--radius-5);
    justify-content: center;
  }

  &:hover {
    opacity: 0.9;
  }

  a {
    color: var(--gray-5);
  }
}

// Actions
.actions {
  align-self: start;
  display: grid;
  gap: var(--m);
  grid-auto-flow: row;
  list-style: none;
  padding: 0;

  // Items
  &__item {
    // Anim
    opacity: 0;
    transform: translate(0, 3rem);
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

    @include media-query('lg') {
      width: clamp(20rem, 50vw, 30rem);
      margin: 0 auto 0 0;
    }

    &:nth-child(1) {
      animation-delay: 1.25s;
    }
    &:nth-child(2) {
      animation-delay: 1.35s;
    }
    &:nth-child(3) {
      animation-delay: 1.5s;
    }
    &:nth-child(4) {
      animation-delay: 1.65s;
    }

    // Credits
    &--credits {
      @include media-query('lg') {
        display: none;
      }
    }
  }
  // Buttons
  &__button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
}
</style>
