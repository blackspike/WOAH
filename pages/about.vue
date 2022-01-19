<template lang="pug">
section.about.card-bg
  .about__header
    h2.about__title About Work Out At Home
    p.about__subtitle Warmup &amp; workout timer

  .about__content
    p I made this app as I've been following the brilliant #[a(href='https://nerdfitness.com', target='_blank') nerdfitness.com] beginners #[nuxt-link(to='videos') warmup and workout videos], but kept forgetting the steps &mdash; plus I needed a timer for the reps so I thought I'd just build myself a little app.

    P I'll open source it on github as soon as I've ironed out the kinks. Cheers!

    p App by #[a(href='https://blackspike.com', target='_blank') blackspike.com]
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
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.about {
  align-items: center;
  display: grid;
  gap: var(--m);
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: 1fr 2fr auto;
  height: 100%;
  justify-content: center;
  margin: 0 var(--m);
  padding: var(--m) var(--m-lg) var(--m-lg);
  user-select: none;

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
    text-transform: uppercase;
    font-weight: var(--fw-bd);
  }

  &__logo {
    color: var(--text);
    max-width: 100px;
    height: auto;
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
