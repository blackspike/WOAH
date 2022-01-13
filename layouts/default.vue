<template lang="pug">
.app
  header.header-wrapper
    AppHeader

  main.content-wrapper
    nuxt

  svg(xmlns='http://www.w3.org/2000/svg', style='display: none')
    symbol#icon_plus(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M12 5v14')
      path(d='M5 12h14')

    symbol#icon_drag(viewbox='0 0 16 9')
      path(d='M16,0V1H0V0ZM0,5H16V4H0ZM0,9H16V8H0Z', fill='currentColor')
      path(
        d='M16,0H0V1H16V0Zm0,4H0V5H16V4Zm0,4H0V9H16V8Z',
        fill='currentColor'
      )
    symbol#icon_edit(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7')
      path(d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z')

    symbol#icon_trash(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(d='M3 6h18')
      path(
        d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'
      )
      path(d='M10 11v6')
      path(d='M14 11v6')
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

    symbol#icon_gear(
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
      path(
        d='M11 19.938a7.96 7.96 0 0 1-3.906-1.618l-1.458 1.458l-1.414-1.414l1.458-1.458A7.96 7.96 0 0 1 4.062 13H2v-2h2.062A7.96 7.96 0 0 1 5.68 7.094L4.222 5.636l1.414-1.414L7.094 5.68A7.96 7.96 0 0 1 11 4.062V2h2v2.062a7.96 7.96 0 0 1 3.906 1.618l1.458-1.458l1.414 1.414l-1.458 1.458A7.96 7.96 0 0 1 19.938 11H22v2h-2.062a7.96 7.96 0 0 1-1.618 3.906l1.458 1.458l-1.414 1.414l-1.458-1.458A7.96 7.96 0 0 1 13 19.938V22h-2v-2.062zM12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10z'
      )
</template>
<script>
import NoSleep from 'nosleep.js'

export default {
  name: 'Index',
  enableNoSleep() {
    const noSleep = new NoSleep()
    noSleep.enable()
  },
}
</script>

<style lang="scss" >
.app {
  background-color: var(--bg-app);
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: auto 1fr;
  height: 100%;
  padding: 0 0 var(--m);
  width: 100%;

  @include media-query('xl') {
    margin: var(--m-xl) auto;
    padding: var(--m-xl) 0;
    border-radius: var(--radius-3);
    box-shadow: var(--bxs-md);
    max-width: var(--mw-content);
  }
}

.header-wrapper {
  grid-area: header;
}

.content-wrapper {
  height: 100%;
  grid-area: content;
  margin: auto;
  max-width: var(--mw-content);
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);

  > * {
    height: 100%;
  }
}
</style>