<template lang="pug">
header.header
  nuxt-link.header__logo.header__link(
    @click.native='navOpen = false',
    to='/',
    title='Work Out At Home'
  )
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
  max-width: var(--mw-header);
  padding: var(--m-lg) var(--m);

  @supports (padding: max(0px)) {
    padding-left: max(var(--m), env(safe-area-inset-left));
    padding-right: max(var(--m), env(safe-area-inset-right));
    padding-top: max(var(--m), env(safe-area-inset-top));
  }

  &__link {
    font-size: var(--fs-lg);
    font-family: var(--ff-heading);
    line-height: 1;
    display: flex;
    color: currentColor;
    letter-spacing: -1px;

    .dot {
      opacity: 0.5;
    }

    &:focus,
    &:active {
      outline: 2px dotted var(--brand-orange);
    }

    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
  // Button
  &__menu-btn {
    grid-area: button;
    .icon {
      fill: currentColor;
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
  background-color: var(--gray-10);
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--m);
  right: 0;
  top: var(--m);
  grid-area: mobile-nav;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.3);
  padding: var(--m-lg);
  border-radius: var(--radius-2);

  &__link {
    font-size: var(--fs-xl);
    font-family: var(--ff-heading);
    line-height: var(--lh-xs);
    display: flex;
    letter-spacing: -1px;
    color: var(--gray-5);

    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
}
</style>