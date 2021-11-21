<template lang="pug">
section.intro
  svg.icon
    use(href='#icon_watch')
  h2
    | Put Apple Watch On
  h3 Start Functional Strength Training

  nuxt-link.btn-plain.btn-square.start-button(to="/warmup") Next

</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentPage: null
    }
  }
}
</script>

<style lang="scss" scoped>

.intro {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  text-align: center;

  @include media-query('md'){
    text-align: left;
  }

  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }

  .start-button {
    margin: var(--m) auto 0;
    max-width: 20ch;
  }

  .icon {
    height: 8rem;
    width: 8rem;
    color: var(--c-brand-blue);
  }
}
</style>
