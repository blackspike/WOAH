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
    img(
      alt='',
      height='1008',
      width='548',
      src='~/assets/img/screengrabs/screengrab-tall-smol.png'
    )

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

  svg.free(
    width='222',
    alt='Free!',
    height='223',
    viewBox='0 0 222 223',
    xmlns='http://www.w3.org/2000/svg'
  )
    path.free__star(
      d='M111.566 0.479858L121.467 10.9563L133.221 2.61269L140.888 14.8193L154.044 8.92923L159.182 22.397L173.234 19.1867L175.646 33.3981L190.055 32.991L189.648 47.3998L203.859 49.8116L200.649 63.8641L214.117 69.002L208.226 82.1582L220.433 89.8248L212.09 101.579L222.566 111.48L212.09 121.381L220.433 133.135L208.226 140.802L214.117 153.958L200.649 159.096L203.859 173.148L189.648 175.56L190.055 189.969L175.646 189.562L173.234 203.773L159.182 200.563L154.044 214.03L140.888 208.14L133.221 220.347L121.467 212.003L111.566 222.48L101.665 212.003L89.9109 220.347L82.2443 208.14L69.0881 214.03L63.9502 200.563L49.8977 203.773L47.4859 189.562L33.0771 189.969L33.4842 175.56L19.2728 173.148L22.4831 159.096L9.01532 153.958L14.9054 140.802L2.69878 133.135L11.0423 121.381L0.565948 111.48L11.0423 101.579L2.69878 89.8248L14.9054 82.1582L9.01532 69.002L22.4831 63.8641L19.2728 49.8116L33.4842 47.3998L33.0771 32.991L47.4859 33.3981L49.8977 19.1867L63.9502 22.397L69.0881 8.92923L82.2443 14.8193L89.9109 2.61269L101.665 10.9563L111.566 0.479858Z',
      fill='#FF00C7'
    )
    text.free__text(transform='translate(37 116.754)', fill='white')
      tspan(x='0.421875', y='26.4') FREE!
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
    animation-delay: 0.95s;
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    color: var(--brand-yellow);
    font-size: clamp(1rem, 1.5vw + 1rem, 3rem);
    justify-self: start;
    opacity: 0;
    transform: translate(0, -5rem);
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

// Freeeee
.free {
  bottom: 2rem;
  font-family: var(--ff-heading);
  font-size: 88px;
  height: 80px;
  right: 2rem;
  position: fixed;
  user-select: none;
  width: 80px;
  z-index: var(--layer-2);
  // Anim
  opacity: 0;
  animation: spin-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 1.8s;

  &__star {
    animation: spin 20s linear infinite;
    transform-origin: center;
  }

  @include media-query('md') {
    height: 128px;
    width: 128px;
  }
  @include media-query('lg') {
    height: 180px;
    width: 180px;
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
    margin: var(--m-xxxl) 0;
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
