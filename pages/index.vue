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
// Animations

// Bobbing animation
@keyframes bobbing {
  from {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(0, 1rem);
  }
  to {
    transform: translate(0, -0);
  }
}

// Drop in animation
@keyframes drop-in {
  from {
    transform: translate(0, -5rem);
    opacity: 0;
  }
  to {
    transform: translate(0, -0);
    opacity: 1;
  }
}

// Drop up animation
@keyframes drop-up {
  from {
    transform: translate(0, 3rem);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

// Intro
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
  max-width: var(--mw-content);
  text-transform: uppercase;

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
    animation: bobbing 10s ease-in-out infinite;

    @include media-query('lg') {
      opacity: 1;
      margin-top: 2vh;
    }
  }

  &__title {
    font-size: clamp(3rem, 10vw + 2rem, 10.5rem);
    font-family: var(--ff-brand);
    margin: var(--m-xl) 0 var(--m-lg);
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
    display: flex;
    flex-direction: column;
    gap: var(--m);

    a {
      color: var(--brand-yellow);
    }
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
