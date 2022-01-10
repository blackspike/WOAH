<template lang="pug">
header.header
  nuxt-link.header__logo.header__link(
    @click.native='navOpen = false',
    to='/',
    title='Work Out At Home'
  ) W.O.A.H

  nav.nav
    nuxt-link.header__link(to='/warmup') Warmup
    nuxt-link.header__link(to='/workout') Workout
    nuxt-link.header__link(to='/videos') Videos

  nav.nav-mobile(v-if='navOpen')
    nuxt-link.header__link(@click.native='navOpen = false', to='/warmup') Warmup
    nuxt-link.header__link(@click.native='navOpen = false', to='/workout') Workout
    nuxt-link.header__link(@click.native='navOpen = false', to='/videos') Videos

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

  @include media-query('md') {
    padding: var(--m);
  }

  &__link {
    font-size: var(--fs-lg);
    font-family: var(--ff-heading);
    line-height: 1;
    display: flex;
    padding: var(--m) var(--m) var(--m-sm);
    color: currentColor;

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

  &__logo {
    margin-right: auto;
    height: 100%;
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
  background-color: var(--bg);
  width: 100%;
  position: absolute;
  top: 0;
  grid-area: mobile-nav;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.3);
  padding-bottom: var(--m);
}
</style>