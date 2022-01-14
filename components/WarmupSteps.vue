<template lang="pug">
//- Slider
client-only
  splide(:options='splideOptions', @splide:move='slideChange')
    splide-slide(v-for='(step, index) in steps', :key='step')
      article.step
        h2.step__title {{ step }}
</template>

<script>
import '@splidejs/splide/dist/css/splide-core.min.css'
import { mapState } from 'vuex'

export default {
  name: 'WarmupSteps',
  props: {
    started: {
      type: Boolean,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      splideOptions: {
        arrows: false,
        gap: '.5rem',
        keyboard: false,
        padding: '1.5rem',
        start: 0,
        pagination: false,
        type: 'slide',
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.warmUp.steps,
    }),
  },
  methods: {
    slideChange(slider, newIndex, prevIndex, destIndex) {
      this.$emit('test', { newIndex, prevIndex, destIndex })
    },
  },
}
</script>

<style lang="scss" scoped>
// Steps list
.step {
  background-color: var(--gray-8);
  border-radius: var(--radius-2);
  box-shadow: var(--bxs-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: var(--m);
  width: 100%;
  height: 90%;

  &__title {
    align-items: center;
    background-color: var(--gray);
    border-radius: var(--radius-2);
    color: var(--brand-pink);
    display: flex;
    font-size: var(--fs-xxl);
    justify-content: center;
    margin: 0;
    padding: var(--m-sm) 0;
    text-align: center;
    min-height: 6rem;
    text-shadow: 0 0.1rem 0.1rem black;
  }
}
</style>
