<template lang="pug">
//- Splider
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
        pauseOnHover: false,
        pauseOnFocus: false,
        type: 'fade',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// Phone screengrab
.screengrab {
  display: block;
}

// Hack to hide splides til they're loaded
:where(.splide__slide) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

}

</style>

