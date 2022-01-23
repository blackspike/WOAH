<template lang="pug">
.header(v-click-outside='hideNav')
  .header__masthead
    nuxt-link.header__logo(@click.native='navOpen = false', to='/') WOAH
    span(v-if='$nuxt.$route.name !== "index"') //
    h1.header__title {{ $nuxt.$route.name === "index" ? "" : $nuxt.$route.name.replace("-", " ") }}

  nav.nav-desktop
    nuxt-link.nav-desktop__link(to='/warmup') Warmup
    nuxt-link.nav-desktop__link(to='/workout') Workout
    nuxt-link.nav-desktop__link(to='/videos') Videos
    nuxt-link.nav-desktop__link(to='/neck') Neck
    nuxt-link.nav-desktop__link(to='/settings') Settings
    nuxt-link.nav-desktop__link(to='/about') About

  nav.nav-mobile(:class='{ open: navOpen }')
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/') Home
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/warmup') Warmup
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/workout') Workout
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/videos') Videos
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/neck') Neck
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/settings') Settings
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/about') About

  button.btn-plain.btn-icon.nav-btn(
    @click='toggleNav',
    :class='{ open: navOpen }',
    aria-label='Toggle nav'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_x', v-if='navOpen')
      use(href='#icon_menu', v-else)
</template>

<script>
import { mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Header',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      navOpen: false,
    }
  },
  computed: {
    ...mapState(['siteName']),
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
    hideNav() {
      this.navOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  color: var(--gray-5);
  display: grid;
  gap: var(--m);
  grid-template-areas: 'masthead nav-desktop button';
  grid-template-columns: 1fr auto auto;
  margin: auto;
  padding: 0 var(--m) var(--m-sm);
  overflow: hidden;
  user-select: none;
  width: 100%;

  @include media-query('md') {
    padding: var(--m);
    align-items: baseline;
  }

  @include media-query('lg') {
    max-width: var(--mw-content-wide);
    padding: var(--m) var(--m);
  }

  &__masthead {
    align-items: flex-end;
    display: flex;
    gap: var(--m-sm);
    grid-area: masthead;
  }

  &__logo {
    font-family: var(--ff-brand);
    color: currentColor;
    display: flex;
    font-size: var(--fs-lg);

    text-transform: uppercase;

    &:focus,
    &:active {
      color: var(--brand-orange);
    }
  }
  &__title {
    color: var(--gray-3);
    font-size: var(--fs-sm);
    font-family: var(--ff-base);
    text-transform: uppercase;
  }
  &__current-step {
    color: var(--gray-6);
  }
}

// List nav
.nav-desktop {
  display: none;
  gap: var(--m);
  grid-area: nav-desktop;
  justify-content: center;

  @include media-query('md') {
    display: flex;
  }

  &__link {
    color: currentColor;
    font-size: var(--fs-xs);
    text-transform: uppercase;

    &:focus,
    &:active,
    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
}

// Button
.nav-btn {
  grid-area: button;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: flex-end;
  z-index: var(--layer-5);
  padding: var(--m-sm) 0 0;
  color: var(--gray-5);

  &:focus,
  &:hover,
  &.open {
    color: var(--brand-orange);
  }

  .icon {
    fill: currentColor;
    height: 1.5rem;
    width: 1.5rem;
  }

  @include media-query('md') {
    display: none;
  }
}

// Dropdown nav
.nav-mobile {
  background-color: rgba(15, 15, 15, 0.95);
  border-radius: var(--radius-2);
  bottom: 0.5rem;
  box-shadow: var(--bxs-lg);
  display: flex;
  flex-direction: column;
  gap: var(--m);
  height: calc(100% - 1rem);
  padding: var(--m-xl) var(--m-lg) var(--m-lg);
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  transform: translateX(150%);
  transition: all 0.3s var(--ease-cubic);
  z-index: var(--layer-4);

  &.open {
    transform: translateX(0%);
  }

  &__link {
    background-color: var(--gray-9);
    border-radius: var(--radius-5);
    color: var(--gray-5);
    display: block;
    font-family: var(--ff-brand);
    font-size: var(--fs-md);
    padding: calc(var(--m) * 0.9) var(--m-xl) var(--m);
    text-align: center;
    transition: all 0.2s ease;
    width: 100%;

    &:hover,
    &:focus {
      background-color: var(--gray-5);
      color: var(--gray-10);
    }
    &:active {
      background-color: var(--gray-6);
    }

    &.nuxt-link-exact-active {
      color: var(--gray-1);
      background-color: var(--brand-orange);
    }
  }
}
</style>