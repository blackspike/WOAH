<template lang="pug">
section.workout
  h1.workout__title Workout

  //- Slider
  client-only placeholder="Loading..."
    agile(:options='agileSliderOptions')
      .slide
        h3 slide 1

      .slide
        h3 slide 2

      .slide
        h3 slide 3

  .controls
    .rep-counter {{ "Rep #" + repCount }}
    button.btn(@click='repCount++') +
    button.btn(@click='repCount > 0 ? repCount-- : 1') -
</template>

<script>
export default {
  name: 'Workout',
  data() {
    return {
      repCount: 3,
      agileSliderOptions: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.slide {
  height: 100%;
  width: 100%;
  outline: 2px dotted orangered;
}
// Workout
.workout {
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--m);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'title' 'list' 'timer';

  &__title {
    grid-area: title;
    font-size: var(--fs-xxl);
    margin: 0;
  }
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;

  .rep-counter {
    width: 100%;
    font-size: var(--fs-xxl);
    color: var(--brand-blue);
  }
}
</style>
