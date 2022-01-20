<template lang="pug">
section.workout
  //- Slider
  client-only
    splide.woah-splide(:options='splideOptions')
      splide-slide(v-for='(day, dayKey) in workouts', :key='dayKey')
        WorkoutCard(:dayKey='dayKey')

  //- Controls
  .controls
    .rep-counter
      span.rep-counter__title Rep
      span.rep-counter__count {{ "#" + repCount }}
    button.btn.btn-icon.rep-counter__btn(@click='repCount++')
      svg.icon(height='24', width='24')
        use(href='#icon_plus')
    button.btn.btn-icon.rep-counter__btn(
      @click='repCount > 0 ? repCount-- : 1'
    )
      svg.icon(height='24', width='24')
        use(href='#icon_minus')
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
        padding: { left: '2.5rem', right: '2.5rem' },
        gap: '1.5rem',
        breakpoints: {
          640: {
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
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--m);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'title' 'list' 'timer';
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;
  padding: 0 var(--m);

  .rep-counter {
    width: 100%;
    font-size: var(--fs-xl);
    font-family: var(--ff-brand);

    &__title {
      margin-right: var(--m-sm);
    }
    &__count {
      color: var(--brand-yellow);
    }
    &__btn {
      height: 3rem;
      width: 5rem;
      padding: 0;
    }
  }
}
</style>
