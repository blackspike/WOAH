<template lang="pug">
.header
  .header__masthead
    nuxt-link.header__logo(
      @click.native='navOpen = false',
      to='/',
      aria-title='Work Out At Home'
    ) WOAH
      //- | Work Out At Home
      //- span.letter W
      //- span.dot .
      //- span.letter O
      //- span.dot .
      //- span.letter A
      //- span.dot .
      //- span.letter H

    h1.header__title {{ $nuxt.$route.name === "index" ? "Home" : $nuxt.$route.name }}

    //- span.header__current-step(v-if='$nuxt.$route.name === "warmup"') {{ $store.state.warmup.currentStep }}/{{ $store.state.warmup.steps.length }}

  nav.nav
    nuxt-link.header__link(to='/warmup') Warmup
    nuxt-link.header__link(to='/workout') Workout
    nuxt-link.header__link(to='/videos') Videos
    nuxt-link.header__link(to='/settings') Settings

  nav.nav-mobile(v-if='navOpen')
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/warmup') Warmup
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/workout') Workout
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/videos') Videos
    nuxt-link.nav-mobile__link(@click.native='navOpen = false', to='/settings') Settings

  button.btn-plain.btn-icon.header__menu-btn(
    @click='navOpen = !navOpen',
    :style='{ active: navOpen }'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_x', v-if='navOpen')
      use(href='#icon_menu', v-else)
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      navOpen: false,
    }
  },
  computed: {
    ...mapState(['siteName']),
  },
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  color: var(--gray-5);
  display: grid;
  gap: 0 var(--m);
  grid-area: header;
  grid-template-areas: 'masthead nav button' 'mobile-nav mobile-nav mobile-nav';
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto;
  margin: auto;
  max-width: var(--mw-content);
  padding: 0 var(--m) var(--m-sm);
  user-select: none;
  width: 100%;

  @include media-query('md') {
    padding: var(--m);
  }
  @include media-query('xl') {
    padding: 0 var(--m) var(--m);
  }

  &__masthead {
    align-items: flex-end;
    display: flex;
    gap: var(--m);
    grid-area: masthead;
  }
  &__logo {
    font-family: var(--ff-brand);
    color: currentColor;
    display: flex;
    font-size: var(--fs-lg);
    font-weight: var(--fw-bd);
    text-transform: uppercase;

    &:focus,
    &:active {
      color: var(--brand-orange);
    }
  }
  &__title {
    color: var(--gray-5);
    font-size: var(--fs-sm);
    font-family: var(--ff-base);
    text-transform: uppercase;
    font-weight: var(--fw-bd);
  }
  &__current-step {
    color: var(--gray-6);
  }

  &__link {
    color: currentColor;
    display: flex;
    // font-size: var(--fs-lg);
    font-weight: var(--fw-bd);
    text-transform: uppercase;

    &:focus,
    &:active {
      color: var(--brand-orange);
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
    display: flex;
    justify-content: flex-end;
    padding: var(--m-sm) 0 0;
    color: var(--gray-5);

    &:focus,
    &:hover,
    &:active {
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
}

.nav {
  display: none;
  gap: var(--m);
  grid-area: nav;
  justify-content: center;

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
  top: var(--m-sm);
  z-index: var(--layer-4);

  &__link {
    color: var(--gray-10);
    font-size: var(--fs-lg);
    font-family: var(--ff-brand);

    &.nuxt-link-exact-active {
      color: var(--brand-orange);
    }
  }
}
</style>