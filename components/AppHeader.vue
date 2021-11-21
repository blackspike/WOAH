<template lang="pug">

nav.nav
  nuxt-link.nav__title.nav__nav-item.nav__link.btn-plain(to="/") WorkoutApp
  //- button.btn.btn-icon
  //-   svg.icon
  //-     use(href='#icon_menu')

  nuxt-link.nav__nav-item.nav__link.btn-plain(to="/warmup") Warmup
  nuxt-link.nav__nav-item.nav__link.btn-plain(to="/workout") Workout
  nuxt-link.nav__nav-item.nav__link.btn-plain(to="/videos") Videos

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>

.nav {
  padding: var(--m);
  grid-area: header;
  display: flex;
  justify-content: center;
  gap: var(--m);

  &__nav-item {
    font-size: var(--fs-xxl);
    font-family: var(--ff-heading);
    line-height: 1;
    display: flex;
    padding: var(--m) var(--m) var(--m-sm);
    color: var(--c-grey-300);

    &:focus,
    &:active {
      outline: 2px dotted var(--c-brand-orange);
    }

  }

  &__title {
    margin-right: auto;
    height: 100%;
  }

  &__link  {

    &.nuxt-link-exact-active {
      color: var(--c-brand-orange);;
    }

  }

}

</style>