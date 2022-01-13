<template lang="pug">
.header
  nuxt-link.header__logo.header__link(
    @click.native='navOpen = false',
    to='/',
    aria-title='Work Out At Home'
  )
    //- | Work Out At Home
    span.letter W
    span.dot .
    span.letter O
    span.dot .
    span.letter A
    span.dot .
    span.letter H

  nav.nav
    nuxt-link.header__link(to='/warmup') Warmup
    nuxt-link.header__link(to='/workout') Workout
    nuxt-link.header__link(to='/videos') Videos

  nav.nav-mobile(v-if='navOpen')
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/warmup') Warmup
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/workout') Workout
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/videos') Videos

  button.btn.btn-icon.header__menu-btn(@click='navOpen = !navOpen')
    svg.icon(height='24', width='24')
      use(href='#icon_x', v-if='navOpen')
      use(href='#icon_menu', v-else)
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto;
  grid-template-areas: 'logo nav button' 'mobile-nav mobile-nav mobile-nav';
  gap: 0 var(--m);
  align-items: center;
  position: relative;
  color: var(--gray-5);
  margin: auto;
  max-width: var(--mw-content);
  padding: var(--m-sm) var(--m) var(--m);

  &__link {
    font-size: var(--fs-lg);
    line-height: 1;
    display: flex;
    color: currentColor;
    letter-spacing: -1px;

    .dot {
      opacity: 0.5;
    }

    &:focus,
    &:active {
      color: var(--brand-orange);
      // outline: 2px dotted var(--brand-orange);
    }

    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
  // Button
  &__menu-btn {
    grid-area: button;
    height: 3rem;
    width: 3rem;
    border: 2px solid var(--gray-8);
    .icon {
      fill: currentColor;
      height: 100%;
      width: 100%;
    }

    @include media-query('md') {
      display: none;
    }
  }
}

.nav {
  grid-area: nav;
  display: none;
  justify-content: center;
  gap: var(--m);

  @include media-query('md') {
    display: flex;
  }
}
.nav-mobile {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-2);
  box-shadow: var(--bxs-lg-blue);
  display: flex;
  flex-direction: column;
  gap: var(--m-lg);
  grid-area: mobile-nav;
  padding: var(--m-lg);
  position: absolute;
  right: 0;
  top: var(--m);
  z-index: var(--layer-4);

  &__link {
    color: var(--gray-10);
    display: flex;
    font-size: var(--fs-xxl);
    letter-spacing: -1px;
    line-height: var(--lh-xs);

    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
}
</style>