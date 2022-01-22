<template lang="pug">
section.about
  .intro
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
      h2.intro__title
        span.spanimation About
        span.spanimation Work
        span.spanimation Out
        span.spanimation At
        span.spanimation Home

  .about__content
    p Follow the brilliant #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com] beginners #[nuxt-link(to='videos') warmup and workout videos], but keep forgetting the steps? You also need a timer for the reps? Look no further! This is a web app for those things.

    p The neck exercises are for those of us who sit at computers all day 😬

    P This app will be open sourced on github once the kinks are ironed out. Cheers!

    h3.about__fat-title Ideas? Bugs?

    p Please ping an email to <a href="mailto:woah@blackspike.com">woah@blackspike.com</a>

    h3.about__by-title App design &amp; build by

    p
      a(
        href='https://blackspike.com/',
        target='_blank',
        aria-label='App by Blackspike.com - visit website'
      )
        svg.icon.about__logo(height='436', width='1182')
          use(href='#icon_blackspike')

    .about__footer
      p Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
      p Neck by #[a(href='https://www.versusarthritis.org/', target='_blank') versusarthritis.org] #[a(href='https://www.versusarthritis.org/media/21788/neckpain-exercise-sheet.pdf', target='_blank') | (pdf)]
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.intro {
  max-width: var(--mw-content-wide);
  margin: 0 auto;

  &__header {
    text-shadow: 0 0 5rem rgba(0, 0, 0, 0.8);
  }

  &__screengrabs {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.2;

    @include media-query('lg') {
      margin-top: 2vh;
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

  &__title {
    font-size: clamp(3rem, 10vw + 2rem, 10.5rem);
    font-family: var(--ff-brand);
    margin: var(--m-xl) 0 var(--m-lg);
    display: flex;
    flex-wrap: wrap;
    gap: 0 var(--m);

    .spanimation {
      opacity: 0;
      transform: translate(0, -5rem);
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
      &:nth-child(5) {
        animation-delay: 0.75s;
      }
    }
  }
}
.about {
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
  font-size: var(--fs-lg);
  align-items: center;
  display: grid;
  gap: var(--m);
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: 1fr 2fr auto;
  height: 100%;
  justify-content: center;
  margin: 0 var(--m);
  padding: var(--m) clamp(var(--m), 5vw, var(--m-lg)) var(--m-lg);

  &__header {
    grid-area: header;
  }

  &__content {
    grid-area: content;
    max-width: var(--mw-content-wide);
    margin: 0 auto 0 0;

    * {
      max-width: var(--mw-content);
    }
  }

  &__fat-title {
    font-family: var(--ff-brand);
    font-size: var(--fs-xl);
    margin: var(--m-lg) 0;
  }

  &__by-title {
    margin: var(--m-xl) 0 var(--m);
  }

  &__logo {
    color: var(--text);
    max-width: 220px;
    height: auto;
    margin: 0 0 var(--m-xl);
  }

  &__footer {
    grid-area: footer;
    font-family: var(--ff-brand);
    font-size: var(--fs-sm);
    margin-bottom: var(--m-xl);

    a {
      color: var(--brand-yellow);
    }
  }

  &__content {
    grid-area: content;
    align-self: start;
    line-height: var(--lh-lg);

    p {
      margin-block-end: var(--m);
    }
  }
}
</style>
