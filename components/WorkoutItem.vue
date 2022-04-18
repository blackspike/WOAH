<template lang="pug">
.workout-item(v-click-outside='closeSlider')
  button.btn-plain.count(@click='showSlider = !showSlider') {{ newCount }}

  input.title-input(
    type='text',
    v-model='newTitle',
    ref='input',
    spellcheck='false',
    v-on:keyup.enter='$event.target.blur()',
    enterkeyhint='done',
    @change='updateStepTitle'
  )

  .count-slider(:class='{ open: showSlider }')
    label.span.count-slider__label
      .span.count-slider__label-text Count
      input.count-slider__range(
        @change='updateStepCount',
        type='range',
        min='1',
        max='99',
        v-model='newCount'
      )
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'WorkoutItem',
  directives: {
    ClickOutside,
  },
  props: {
    dayKey: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newCount: 10,
      newTitle: '',
      showSlider: false,
    }
  },
  mounted() {
    this.newCount = this.count
    this.newTitle = this.title
  },
  methods: {
    // Toggle range slider
    closeSlider() {
      this.showSlider = false
    },
    // Call update
    updateStepTitle(e) {
      this.$emit('updateStepTitle', {
        index: this.index,
        title: this.newTitle,
      })
    },
    updateStepCount(e) {
      this.$emit('updateStepCount', {
        index: this.index,
        count: Number(this.newCount),
      })
    },
    // Call Delete
    deleteStep() {
      this.$emit('deleteStep', this.index)
    },
  },
}
</script>

<style lang="scss" scoped>
// Card
.workout-item {
  align-items: center;
  background-color: var(--gray-9);
  border-radius: var(--radius-2);
  display: grid;
  font-size: var(--fs-xl);
  height: 100%;
  gap: 0 var(--m-sm);
  grid-template-areas: 'count title' 'slider slider';
  grid-template-columns: 3ch 1fr;
  justify-content: center;

  .single & {
    grid-template-areas: 'count' 'title' 'slider';
    grid-template-columns: 1fr;
    padding: var(--m);
  }
}

.count {
  grid-area: count;
  color: var(--brand-yellow);
  font-variant-numeric: tabular-nums;
  text-align: right;
  padding: var(--m-xs) var(--m) 0;

  .single & {
    font-size: calc(var(--fs-md) * 12);
    text-align: center;
  }
}

.title-input {
  align-content: center;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  box-shadow: none;
  color: var(--brand-blue);
  display: flex;
  grid-area: title;
  height: 100%;
  line-height: 1;
  margin-inline-start: var(--m-sm);
  padding: var(--m-xs) var(--m-sm) 0;
  width: 100%;

  &:focus,
  &:focus-within {
    border: 0;
  }
  .single & {
    text-align: center;
  }
}

// Count Slider
.count-slider {
  align-items: center;
  display: flex;
  grid-area: slider;
  height: 0;
  justify-content: center;
  overflow: hidden;
  padding-inline: var(--m);
  transition: height 0.3s ease-in-out;
  width: 100%;

  &.open {
    height: 50px;
  }

  &__label {
    width: 100%;
  }
  &__label-text {
    display: none;
  }
  &__range {
    width: 100%;
  }
}
</style>
