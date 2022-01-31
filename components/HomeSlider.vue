<template lang="pug">
//- Splider
client-only
  splide(:options='splideOptions', ref='imageSplide')
    //- Splide
    splide-slide
      //- Screengrab 1
      picture.screengrab
        source(
          type='image/avif',
          srcset='~/assets/img/home-slider/slider_1-smol.avif'
        )
        source(
          type='image/webp',
          srcset='~/assets/img/home-slider/slider_1-smol.webp'
        )
        img.screengrab__img(
          alt='',
          height='1008',
          width='548',
          src='~/assets/img/home-slider/slider_1-smol.png'
        )
    //- Splide
    splide-slide
      //- Screengrab 2
      picture.screengrab
        source(
          type='image/avif',
          srcset='~/assets/img/home-slider/slider_2-smol.avif'
        )
        source(
          type='image/webp',
          srcset='~/assets/img/home-slider/slider_2-smol.webp'
        )
        img.screengrab__img(
          alt='',
          height='1008',
          width='548',
          src='~/assets/img/home-slider/slider_2-smol.png'
        )
    //- Splide
    splide-slide
      //- Screengrab 3
      picture.screengrab
        source(
          type='image/avif',
          srcset='~/assets/img/home-slider/slider_3-smol.avif'
        )
        source(
          type='image/webp',
          srcset='~/assets/img/home-slider/slider_3-smol.webp'
        )
        img.screengrab__img(
          alt='',
          height='1008',
          width='548',
          src='~/assets/img/home-slider/slider_3-smol.png'
        )
    //- Splide
    splide-slide
      //- Screengrab 4
      picture.screengrab
        source(
          type='image/avif',
          srcset='~/assets/img/home-slider/slider_4-smol.avif'
        )
        source(
          type='image/webp',
          srcset='~/assets/img/home-slider/slider_4-smol.webp'
        )
        img.screengrab__img(
          alt='',
          height='1008',
          width='548',
          src='~/assets/img/home-slider/slider_4-smol.png'
        )
</template>

<script>
export default {
  name: 'HomeSlider',
  data() {
    return {
      splideOptions: {
        arrows: false,
        autoplay: true,
        interval: 3000,
        pagination: false,
        perPage: 1,
        speed: 750,
        start: 0,
        type: 'fade',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// Phone screengrab

.screengrab {
  animation: bobbing 10s ease-in-out infinite;
  width: 100%;
  height: auto;
  display: block;

  &__img {
    width: 100%;
    height: auto;
    max-height: 70vh;
  }

  @include media-query('md') {
    height: 100%;
    max-height: 100%;

    &__img {
      max-height: 100%;
    }
  }
}
</style>

