<template lang="pug">
.warmup-intro
  //- Ready screen
  .ready
    //- Ready title
    h1.ready__title {{ strings.ready }}

    //- Reminder
    .reminder
      //- Watch icon
      svg.icon.reminder__icon
        use(href='#icon_watch')
      //- Rminder
      h2.reminder__title {{ strings.reminder }}

  //- Finished
</template>

<script>
export default {
  name: 'WarmupIntro',
  data() {
    return {
      strings: {
        ready: 'Ready?',
        reminder: 'Remember to start a workout on your smart watch!',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// Ready
.ready {
  &__title {
    color: var(--brand-pink);
    text-align: center;
    font-size: var(--fs-7);
  }
}

// Set watch
.reminder {
  display: flex;
  align-items: center;

  &__icon {
    color: var(--brand-blue);
    width: 14rem;
    height: 7rem;
  }
  &__title {
    color: var(--brand-green);
    font-size: var(--fs-xl);
    margin: 0;
  }
}
</style>
