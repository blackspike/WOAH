<template lang="pug">
.app
  //- Header
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0 var(--m);
  width: 100%;

  @include media-query('xl') {
    margin: var(--m) auto var(--m-xl);
    border-radius: var(--radius-3);
    max-width: var(--mw-content);
  }
}

// Content
.content-wrapper {
  height: 100%;
  margin: auto;
  max-width: var(--mw-content);
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-direction: column;

  > * {
    flex: 1;
  }
}
</style>