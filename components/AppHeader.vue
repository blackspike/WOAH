<template lang="pug">
.header
  .header__masthead
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

    span.header__divider(aria-hidden) ||

    h1.header__title {{ $nuxt.$route.name === "index" ? "Home" : $nuxt.$route.name }}

    span.header__currentStep {{ $store.state.warmup.currentStep }}/{{ $store.state.warmup.steps.length }}

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
  padding: var(--m-sm) var(--m) var(--m);
  position: relative;
  user-select: none;

  &__masthead {
    align-items: center;
    display: flex;
    gap: var(--m-sm);
    grid-area: masthead;
  }
  &__title {
    color: var(--gray-5);
    font-size: var(--fs-lg);
  }
  &__divider {
    color: var(--gray-7);
    display: block;
    font-weight: var(--fw-bd);
    transform: translateY(-1px);
  }
  &__currentStep {
    color: var(--gray-6);
  }

  &__link {
    color: currentColor;
    display: flex;
    font-size: var(--fs-lg);
    letter-spacing: -1px;
    line-height: 1;

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
    border: 2px solid var(--gray-8);
    grid-area: button;
    height: 3rem;
    padding: 0;
    width: 3rem;

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