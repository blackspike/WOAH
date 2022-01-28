<template lang="pug">
section.home-section(:class='{ rtl: rtl }')
  //- content
  .home-section__content
    //- Title
    h2.home-section__title {{ title }}

    //- Content
    .home-section__text
      slot(name='content')

    //- CTA Button
    nuxt-link.home-section__cta-btn.btn--sm.btn(:to='link') {{ buttonText }}

  //- Video
  .home-section__graphic(:class='{ "phone-bg": phoneBg }')
    slot(name='graphic')
</template>

<script>
export default {
  name: 'HomeSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    phoneBg: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.home-section {
  align-items: center;
  display: grid;
  gap: var(--m-lg);
  grid-template-areas: 'content' 'graphic';
  justify-content: center;
  margin-block-end: 15vh;
  margin-inline: auto;
  max-width: var(--mw-content-wide);
  padding: 0 var(--m);

  @include media-query('md') {
    gap: var(--m-xl);
    grid-template-areas: 'content graphic';
    grid-template-columns: 1fr 1fr;

    &.rtl {
      grid-template-areas: 'graphic content';
    }
  }

  &__content {
    grid-area: content;
    line-height: var(--lh-md);
    flex-direction: column;
    font-family: var(--ff-sans);

    p {
      margin-block-end: var(--m-lg);
      font-size: var(--fs-lg);

      &.disclaimer {
        font-size: var(--fs-sm);
      }
    }
  }

  &__title {
    font-size: var(--fs-xxl);
    margin-block-end: var(--m-lg);
  }

  &__cta-btn {
    display: inline-block;
  }

  &__graphic {
    grid-area: graphic;
    margin: 0 auto;
    width: 100%;

    &.phone-bg {
      border-radius: var(--radius-3);
      background-color: var(--gray-10);
      padding: var(--m-sm);
      width: auto;
    }

    // Videos
    video {
      border-radius: calc(var(--radius-3) * 0.6);
      height: 100%;
      overflow: hidden;
      width: 100%;

      @include media-query('md') {
        width: auto;
        max-height: 90vh;
      }
    }
  }
}
</style>
