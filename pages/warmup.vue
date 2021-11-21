<template lang="pug">

section.warmup

  button.btn-plain.btn-square.start-button(v-show="!started" @click="startRoutine") Start

  .timer-wrapper


    .timer(v-show="started")

      .number-huge
        span.number-huge__number {{timer < 10 ? '0' + timer : timer}}
        span.number-huge__unit s


      .controls
        button.btn-plain.btn-square(@click="start" v-if="!counting") Start
        button.btn-plain.btn-square(@click="pause" v-if="counting && !paused") Pause
        button.btn-plain.btn-square(@click="paused = false" v-if="paused") Resume
        button.btn-plain.btn-square(@click="reset" v-if="counting") Reset


  ol.list(v-if="started")
    li.list__item(v-for="step, index in steps" :class="index === currentStep ? 'active' : 'inactive'") {{ step }}

</template>

<script>
export default {
  name: 'Warmup',
  data() {
    return {
      timer: 0,
      counting: false,
      countdownInterval: null,
      routineInterval: null,
      seconds: 30,
      cooldownSeconds: 2,
      started: false,
      paused: false,
      currentStep: 0,
      steps: [
        'March in place (swing arms)',
        'Jog in place',
        'Jumping jacks',
        'Walking jack',
        'March with pull down',
        'Lateral step',
        'Opposite hand/toe touches',
        'Lateral butt kicks',
        'Mountain climbers',
        'Jump rope',
        'Jump up & down, side to side',
      ]
    }
  },
  methods: {
     startRoutine() {
      this.started = true
      this.start()

      this.routineInterval = setInterval(() => {

        if(this.paused) {
          return
        }

        if(this.currentStep === this.steps.length) {
          this.started = false
          this.currentStep = 0
          clearInterval(this.routineInterval)
        } else {
          this.reset()
          this.start()
          this.currentStep++
        }

      }, (this.seconds * 1000) + (this.cooldownSeconds * 1000));
    },

    reset() {
      console.info('resetting...')
      clearInterval(this.countdownInterval)
      this.paused = false
      this.counting = false
      this.timer = this.seconds
    },
    pause() {
      console.info('pausing...')
      this.paused = !this.paused
    },
    start() {
      console.info('starting...')
      this.timer = this.seconds
      this.counting = true

      this.countdownInterval = setInterval(() => {

        if(this.paused) {
          return
        }

        if(this.timer === 0) {
          clearInterval(this.countdownInterval)
          this.counting = false
          return
        }
        this.timer--
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>

.warmup {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'list' 'timer';

  @include media-query('md'){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'list timer';
  }
}

.timer-wrapper {
  grid-area: timer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: end;
  padding-bottom: var(--m-xl);

  @include media-query('md'){
    align-self: center;
  }
}

.start-button {
  grid-area: list;
  align-self: end;
  margin: auto;
  width: 100%;
}

.timer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;
}

.list {
  grid-area: list;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--ff-heading);
  line-height: 1;

  &__item {
    display: block;
    padding: var(--m-sm) 0;
    font-size: var(--fs-xxxl);

    &.active {
      color: var(--c-brand-pink);
      font-size: var(--fs-xxxxl);
    }
    &.inactive {
      opacity: 0.2;
      display: none;
      @include media-query('md'){
        display: block;
      }
    }
  }
}


</style>
