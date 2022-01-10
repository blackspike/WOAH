<template lang="pug">
section.intro
  svg.icon
    use(href='#icon_watch')
  h2 Start smart watch workout

  nuxt-link.btn.start-button(to='/warmup') Next
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentPage: null,
    }
  },
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

  @include media-query('md') {
    text-align: left;
  }

  h2 {
    font-size: var(--fs-xxl);
  }
  .start-button {
    margin: var(--m) auto 0;
    max-width: 20ch;
  }

  .icon {
    height: 8rem;
    width: 8rem;
    color: var(--brand-blue);
  }
}
</style>
