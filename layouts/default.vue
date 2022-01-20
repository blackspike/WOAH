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
export default {
  name: 'Index',
}
</script>

<style lang="scss">
// App
.app {
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--m);
  width: 100%;

  @include media-query('xl') {
    background-color: var(--bg);
    height: auto;
    padding: var(--m) 0;
    margin: var(--m) auto var(--m-xl);
    border-radius: var(--radius-3);
    border: 2px solid var(--gray-8);
    max-width: var(--mw-content);
    box-shadow: var(--bxs-lg);
  }
}

// Content
.content-wrapper {
  height: 100%;
  margin: auto;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-direction: column;

  @include media-query('xl') {
    max-width: var(--mw-content);
  }

  > * {
    flex: 1;
  }
}
</style>