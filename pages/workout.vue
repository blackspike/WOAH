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
    button.btn.reps__btn(@click='repCount++')
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
    //-  -
    button.btn.reps__btn(@click='repCount > 0 ? repCount-- : 1')
      svg.icon(height='24', width='24')
        use(href='#icon_minus')

  //- Slider
  client-only
    splide.woah-splide(:options='splideOptions')
      splide-slide(v-for='(day, dayKey) in workouts', :key='dayKey')
        WorkoutCard(
          :dayKey='dayKey',
          :daySteps='day.steps',
          :title='day.title'
        )
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
        arrows: false,
        pagination: false,
        start: 0,
        speed: 500,
        type: 'loop',
        padding: { left: '5rem', right: '5rem' },
        gap: '1.5rem',
        breakpoints: {
          1024: {
            gap: '.5rem',
            padding: { left: '1rem', right: '1rem' },
          },
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

.reps {
  width: 100%;
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
    font-family: var(--ff-brand);
    font-size: var(--fs-lg);
    margin-right: var(--m-sm);

    &--last {
      color: var(--brand-orange);
    }
    &--done {
      color: var(--brand-green);
    }
  }
  &__btn {
    height: 100%;
    padding: var(--m-sm) var(--m-sm);
    color: var(--gray-9);
  }
}
</style>
