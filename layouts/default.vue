<template lang="pug">
.app
  //- Header
  header.header-wrapper
    AppHeader

  //- Content
  main.content-wrapper
    nuxt

  //- Icons
  SVGIcons
</template>
<script>
import NoSleep from 'nosleep.js'

export default {
  name: 'Index',
  data() {
    return {
      noSleep: null,
    }
  },
  methods: {
    // Nosleep
    enableNoSleep() {
      this.noSleep = new NoSleep()
      this.noSleep.enable()
    },
  },
}
</script>

<style lang="scss">
// App
.app {
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

// Header
.header-wrapper {
  grid-area: header;
}

// Content
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