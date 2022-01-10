<template lang="pug">
.app
  .header-wrapper
    AppHeader

  .content-wrapper
    nuxt

  svg(xmlns='http://www.w3.org/2000/svg', style='display: none')
    symbol#icon_menu(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M3 12l18 0')
      path(d='M3 6l18 0')
      path(d='M3 18l18 0')
    symbol#icon_play(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      polygon(points='5 3 19 12 5 21 5 3')
    symbol#icon_pause(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M6 4h4v16H6Z')
      path(d='M14 4h4v16h-4Z')
    symbol#icon_stop(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      rect(width='18', height='18', x='3', y='3', rx='2')
    symbol#icon_rwd(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M11 19l-9-7 9-7 0 14Z')
      path(d='M22 19l-9-7 9-7 0 14Z')
    symbol#icon_fwd(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M13 19l9-7 -9-7 0 14Z')
      path(d='M2 19l9-7L2 5l0 14Z')
    symbol#icon_watch(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M12 5a7 7 0 1 0 0 14 7 7 0 1 0 0-14Z')
      path(d='M12 9l0 3 1.5 1.5')
      path(
        d='M16.51 17.35l-.35 3.83v0c-.1 1.03-.97 1.82-2 1.82H9.83v0c-1.04 0-1.91-.79-2-1.82l-.35-3.83m.01-10.7l.35-3.83V2.81C7.93 1.78 8.79.99 9.83.99h4.35V.99c1.03-.01 1.9.78 2 1.82l.35 3.83'
      )
    symbol#icon_film(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      rect(width='20', height='20', x='2', y='2', rx='2.18')
      path(d='M7 2l0 20')
      path(d='M17 2l0 20')
      path(d='M2 12l20 0')
      path(d='M2 7l5 0')
      path(d='M2 17l5 0')
      path(d='M17 17l5 0')
      path(d='M17 7l5 0')
    symbol#icon_x(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M18 6L6 18')
      path(d='M6 6l12 12')
</template>
<script>
import NoSleep from 'nosleep.js'

export default {
  name: 'Index',
  data() {
    return {
      currentPage: null,
      noSleep: null,
    }
  },
  mounted() {
    this.noSleep = new NoSleep()
  },
}
</script>

<style lang="scss" >
.app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header' 'content';
  align-items: center;
}

.header-wrapper {
  grid-area: header;
}

.content-wrapper {
  padding: var(--m);
  grid-area: content;
  height: 100%;
  width: 100%;
  display: flex;

  @include media-query('md') {
    padding: var(--m) var(--m-lg);
  }
}
</style>