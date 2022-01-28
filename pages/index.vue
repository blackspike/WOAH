<template lang="pug">
.home
  section.hero
    //- Screengrab
    picture.hero__screengrab.screengrab
      source(
        type='image/avif',
        srcset='~/assets/img/screengrabs/screengrab-tall-trimmed-smol.avif'
      )
      source(
        type='image/webp',
        srcset='~/assets/img/screengrabs/screengrab-tall-trimmed-smol.webp'
      )
      img.screengrab__img(
        alt='',
        height='1008',
        width='548',
        src='~/assets/img/screengrabs/screengrab-tall-trimmed-smol.png'
      )

    //- Header
    header.hero__header
      //- Title
      h1.hero__title
        span.spanimation Work
        span.spanimation Out
        span.spanimation At
        span.spanimation Home

      p.hero__subtitle Warmup &amp; Workout timer

    //- Intro text
    .hero__content
      p Follow #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]* warmup and workout #[nuxt-link(to='videos') videos], but keep forgetting the steps?

      p Need a rep timer &amp; counter?

      p
        strong This is a web app for those things.

      p.disclaimer * Or any workout regime, really

      //- Actions list
      ul.actions.hero__actions
        li.actions__item
          nuxt-link.btn.btn--sm.actions__button(to='/warmup') Warmup
        li.actions__item
          nuxt-link.btn.btn--sm.actions__button(to='/workout') Workout

  //- Home section - Timer
  HomeSectionImport(
    title='Talking timer',
    link='/warmup',
    button-text='Go to warmup'
  )
    template(slot='content')
      p The hands-free timer will read your steps aloud* and automatically progress through the warmup steps
      p.disclaimer * If you want it to that is! You can #[nuxt-link(to='/settings') turn that racket off]

    template(slot='graphic')
      CountdownTimer(
        ref='countdownTimer',
        :time='timerSeconds',
        :duration='30'
      )

  //- Home section - Edit
  HomeSectionImport(
    button-text='Try it out',
    link='/warmup-editor',
    :phone-bg='true',
    :rtl='true',
    title='Fully Editable'
  )
    template(slot='content')
      p All workout &amp; warmup steps are fully editable, draggable and &mdash; if you're sick of them &mdash; removeable
      p Just click the
        span
          svg(
            alt='gear',
            height='27',
            width='18',
            style='display: inline-block; vertical-align: -4px; margin-inline: var(--m-sm)'
          )
            use(href='#icon_gear', aria-hidden)
        | icon

      p.disclaimer Then the
        span
          svg(
            height='27',
            width='18',
            alt='bin',
            style='display: inline-block; vertical-align: -5px; margin-inline: var(--m-xs)'
          )
            use(href='#icon_trash', aria-hidden)
        | icon

    template(slot='graphic')
      video(
        height='984',
        width='584',
        loop,
        muted,
        :autoplay='!isMobile',
        :controls='isMobile',
        playsinline,
        ref='editVid',
        poster='/videos/workout-edit-poster-sm.png'
      )
        source(src='/videos/workout-edit-sm.mp4', type='video/mp4')

  //- Home section - Import
  HomeSectionImport(
    button-text='Import / Export Data',
    link='/settings',
    :phone-bg='true',
    title='Import / Export'
  )
    template(slot='content')
      p Create and share warmups &amp; workouts &mdash; probably ideal for personal trainers &amp; clients
      p Easily back up your workouts or move them to another device
      p.disclaimer Or hand-edit the raw #[code .json] file if you're a total 🤓

    template(slot='graphic')
      video(
        loop,
        height='1000',
        width='584',
        muted,
        :autoplay='!isMobile',
        :controls='isMobile',
        playsinline,
        ref='importVid',
        poster='/videos/import-export-poster-sm.png'
      )
        source(src='/videos/import-export-sm.mp4', type='video/mp4')

  //- Home section - Neck
  HomeSectionImport(
    button-text='Check your neck',
    link='/neck',
    :rtl='true',
    :phone-bg='true',
    title='Necksersises'
  )
    template(slot='content')
      p Some of us* spend too much time staring at screens
      p Set yourself an #[a(href='https://sindresorhus.com/pandan', target='_blank') hourly reminder] to sit back, relax, and twirl your head around like you're in The Exorcist
      p.disclaimer * All of us

    template(slot='graphic')
      img(
        src='~/assets/img/posture-meme.png',
        height='486',
        width='500',
        style='object-fit: contain',
        alt='A meme of a fellow sitting with sprawled on a chair, with the caption \'Why does my back hurt?\' \'Also me\''
      )

  //- Footer Credits
  footer.credits-footer
    .credits
      span Workouts by #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com]
      span Web App by #[nuxt-link(to='/about') Blackspike.com]

  //- Free sticker
  svg.free(
    width='222',
    alt='Free! no ads and no tracking',
    height='223',
    viewBox='0 0 222 223',
    xmlns='http://www.w3.org/2000/svg'
  )
    path.free__star(
      d='M111.566 0.479858L121.467 10.9563L133.221 2.61269L140.888 14.8193L154.044 8.92923L159.182 22.397L173.234 19.1867L175.646 33.3981L190.055 32.991L189.648 47.3998L203.859 49.8116L200.649 63.8641L214.117 69.002L208.226 82.1582L220.433 89.8248L212.09 101.579L222.566 111.48L212.09 121.381L220.433 133.135L208.226 140.802L214.117 153.958L200.649 159.096L203.859 173.148L189.648 175.56L190.055 189.969L175.646 189.562L173.234 203.773L159.182 200.563L154.044 214.03L140.888 208.14L133.221 220.347L121.467 212.003L111.566 222.48L101.665 212.003L89.9109 220.347L82.2443 208.14L69.0881 214.03L63.9502 200.563L49.8977 203.773L47.4859 189.562L33.0771 189.969L33.4842 175.56L19.2728 173.148L22.4831 159.096L9.01532 153.958L14.9054 140.802L2.69878 133.135L11.0423 121.381L0.565948 111.48L11.0423 101.579L2.69878 89.8248L14.9054 82.1582L9.01532 69.002L22.4831 63.8641L19.2728 49.8116L33.4842 47.3998L33.0771 32.991L47.4859 33.3981L49.8977 19.1867L63.9502 22.397L69.0881 8.92923L82.2443 14.8193L89.9109 2.61269L101.665 10.9563L111.566 0.479858Z',
      fill='#FF00C7'
    )
    text.free__headline(transform='translate(33 134)') FREE!
    text.free__strapline(transform='translate(34 151)') No ads or trackers
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      timerSeconds: 30,
      isMobile: true,
      freeHider: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'homepage',
      },
    }
  },
  mounted() {
    // Autoplay video if not handheld
    window.innerWidth <= 700 ? (this.isMobile = true) : (this.isMobile = false)

    // Fake timer
    setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--
      } else {
        this.timerSeconds = 30
      }
    }, 1000)
  },
}
</script>

<style lang="scss">
html.homepage {
  background-image: linear-gradient(var(--bg), rgba(33, 37, 41, 0) 40%),
    url('~assets/img/bg-blur.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
// home
.hero {
  align-items: center;
  display: grid;
  gap: var(--m);
  grid-template-areas: 'header' 'screengrab' 'content';
  grid-template-rows: auto 1fr auto;
  height: 100%;
  margin: 0 auto var(--m-xxl);
  padding: var(--m);
  max-width: var(--mw-content);

  @include media-query('lg') {
    max-width: var(--mw-content-wide);
    grid-template-areas: 'header screengrab' 'content screengrab';
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 2fr 1fr;
  }

  &__header {
    align-self: end;
    grid-area: header;
    text-shadow: 0 0 5rem rgba(0, 0, 0, 0.5), 0 0 2rem rgba(0, 0, 0, 0.8);
    @include media-query('lg') {
      align-self: end;
      text-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
      grid-column: 1 / -1;
    }
  }

  &__title {
    font-size: clamp(3rem, 10vw + 2rem, 10.5rem);
    font-family: var(--ff-brand);
    margin: 5vh 0 var(--m-lg);
    display: flex;
    flex-wrap: wrap;
    gap: 0 var(--m);

    @include media-query('md') {
      gap: 0 var(--m-lg);
    }

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
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: 0.95s;
    color: var(--brand-yellow);
    font-size: clamp(1rem, 1.5vw + 1rem, 3rem);
    justify-self: start;
    opacity: 0;
    text-transform: uppercase;
    transform: translate(0, -5rem);
  }

  &__content {
    align-self: start;
    grid-area: content;
    line-height: var(--lh-md);
    font-family: var(--ff-sans);

    p {
      margin-bottom: var(--m-lg);
      font-size: var(--fs-lg);

      &.disclaimer {
        font-size: var(--fs-sm);
      }
    }

    @include media-query('lg') {
      width: clamp(20rem, 50vw, 32rem);
      margin: 0 auto 0 0;
    }
  }
}

// Phone screengrab

.screengrab {
  align-self: start;
  grid-area: screengrab;
  animation: bobbing 10s ease-in-out infinite;
  display: block;
  justify-self: end;
  grid-column: 1 / -1;
  grid-row-end: 3;

  &__img {
    width: 100%;
    height: auto;
    max-height: 70vh;
  }

  @include media-query('md') {
    align-self: end;
    opacity: 1;
    height: 100%;
    max-height: 100%;

    &__img {
      max-height: 100%;
    }
  }
}

// Freeeee
.free {
  bottom: 2rem;
  fill: var(--gray-0);
  font-family: var(--ff-heading);
  font-size: 92px;
  height: 80px;
  right: 2rem;
  position: fixed;
  pointer-events: none;
  width: 80px;
  z-index: var(--layer-2);
  // Anim
  animation: spin-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 1.8s;
  opacity: 0;

  &__headline {
    transform: translate(33px, calc(134px + 10px));

    @include media-query('md') {
      transform: translate(33px, 134px);
    }
  }

  &__strapline {
    display: none;
    font-family: var(--ff-base);
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;

    @include media-query('md') {
      display: block;
    }
  }

  &__star {
    animation: spin 20s linear;
    animation-iteration-count: 2;
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

// Actions
.actions {
  align-self: start;
  display: grid;
  gap: var(--m);
  grid-auto-flow: column;
  list-style: none;
  padding: var(--m) 0;

  // Items
  &__item {
    // Anim
    opacity: 0;
    transform: translate(0, 3rem);
    animation: drop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

    &:nth-child(1) {
      animation-delay: 1.25s;
    }
    &:nth-child(2) {
      animation-delay: 1.5s;
    }
    &:nth-child(3) {
      animation-delay: 1.75s;
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
    padding-inline: var(--m-sm);
  }
}

// Footer
.credits-footer {
  display: flex;
  padding-inline: var(--m);
  margin-inline: auto;
  max-width: var(--mw-content-wide);

  // Credits
  .credits {
    align-items: center;
    background-color: var(--gray-9);
    border-radius: var(--radius-5);
    color: var(--gray-6);
    display: flex;
    flex-direction: column;
    font-size: var(--fs-sm);
    gap: var(--m);
    justify-content: center;
    margin-block-end: var(--m-xl);
    padding: var(--m-lg);
    transition: opacity 0.2s ease;
    width: 100%;

    @include media-query('md') {
      flex-direction: row;
    }

    a {
      color: var(--gray-5);

      &:hover {
        color: var(--brand);
      }
    }
  }
}
</style>
