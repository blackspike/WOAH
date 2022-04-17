<template lang="pug">
section.workout
  //- reps
  .reps
    //- Title
    .reps__counter
      span.reps__count(v-if='repCount > 1') {{ "Rep #" + repCount }}
      span.reps__count.reps__count--last(v-else-if='repCount === 1') Last rep
      span.reps__count.reps__count--done(v-else) Done!

    //- +
    button.btn.reps__btn(@mousedown='repCount++')
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
    //-  -
    button.btn.reps__btn(@mousedown='repCount > 0 ? repCount-- : 1')
      svg.icon(height='24', width='24')
        use(href='#icon_minus')

  //- Slider
  client-only
    splide.woah-splide(:options='splideOptions')
      splide-slide(v-for='(day, dayKey) in workouts', :key='dayKey')
        WorkoutCard(:dayKey='dayKey', :title='day.title')
</template>

<script>
import '@splidejs/splide/dist/css/splide-core.min.css'
import { mapState } from 'vuex'

export default {
  name: 'Workout',
  data() {
    return {
      repCount: 3,
      splideOptions: {
        arrows: true,
        drag: false,
        gap: '1.5rem',
        keyboard: false,
        padding: { left: '5rem', right: '5rem' },
        pagination: false,
        speed: 500,
        start: 0,
        type: 'loop',
        arrowPath:
          'M37.433,17.4464H8.7597L21.2866,4.9195c1.0011-1.0011,1.0011-2.644,0-3.6451-.9974-.9995-2.6163-1.0011-3.6158-.0037l-.0037,.0037L.7507,18.1908c-.9995,.9974-1.0011,2.6163-.0037,3.6158l.0037,.0037,16.9165,16.9165c.9995,.9995,2.62,.9995,3.6195,0s.9995-2.62,0-3.6195l-12.5269-12.5269h28.6733c1.4118,0,2.567-1.1551,2.567-2.567s-1.1551-2.567-2.567-2.567Z',
        breakpoints: {
          1024: {
            gap: '.5rem',
            padding: { left: '1rem', right: '1rem' },
          },
        },
        classes: {
          arrows: 'splide__arrows woah-splide-nav',
          arrow: 'splide__arrow woah-splide-nav__btn btn-gray',
        },
      },
    }
  },

  computed: {
    ...mapState(['workouts']),
  },
  mounted() {
    // Set day of week
    const d = new Date()
    this.splideOptions.start = d.getDay()
  },
}
</script>

<style lang="scss" scoped>
// Workout
.workout {
  display: flex;
  flex-direction: column;
  gap: var(--m);
  height: 100%;
  width: 100%;
}

// Splide nav

.splide {
  display: flex;
  flex-direction: column-reverse;
}
::v-deep .woah-splide-nav {
  display: flex;
  justify-content: space-between;
  padding: var(--m);

  &__btn.splide__arrow {
    background-color: var(--gray-8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
    }
    &:last-of-type {
      transform: scaleX(-1);
    }
    svg {
      width: 70%;
      height: 70%;
    }
    path {
      fill: var(--gray-5);
    }
  }
}

// Reps
.reps {
  align-items: center;
  display: flex;
  gap: var(--m);
  line-height: 1;
  margin: 0 auto;
  padding: 1vmin var(--m);
  width: 100%;

  @include media-query('lg') {
    max-width: var(--mw-content-wide);
    padding: var(--m) var(--m);
  }

  &__counter {
    flex: 1;
  }

  &__count {
    color: var(--brand-yellow);
    font-family: var(--ff-bsae);
    font-size: var(--fs-lg);
    text-transform: uppercase;

    &--last {
      color: var(--brand-orange);
    }
    &--done {
      color: var(--brand-green);
    }
  }

  &__btn {
    color: var(--gray-0);
    height: 100%;
    padding: var(--m-sm) var(--m-sm);

    svg symbol {
      stroke-width: 5px !important;
    }
  }
}
</style>
