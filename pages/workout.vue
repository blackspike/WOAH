<template lang="pug">
section.workout
  //- Slider
  client-only
    splide(:options='splideOptions')
      splide-slide(v-for='(day, dayKey) in workOuts', :key='dayKey')
        WorkoutCard(:dayKey='dayKey')

  //- Controls
  .controls
    .rep-counter {{ "Rep #" + repCount }}
    button.btn(@click='repCount++') +
    button.btn(@click='repCount > 0 ? repCount-- : 1') -
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
        gap: '.5rem',
        keyboard: false,
        padding: '1.5rem',
        pagination: false,
        start: 0,
        type: 'loop',
      },
    }
  },

  computed: {
    ...mapState(['workOuts']),
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
    font-size: var(--fs-xxl);
    color: var(--brand-blue);
  }
}
</style>
