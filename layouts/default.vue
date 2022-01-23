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
  width: 100%;
}

// Content
.content-wrapper {
  margin: auto;
  width: 100%;
}
</style>