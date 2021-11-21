<template lang="pug">

section.warmup

  .timer-wrapper

    button.btn-plain.btn-square.start-button(v-show="!started" @click="startRoutine") Start

    .timer(v-show="started")

      .number-huge(v-show="!paused")
        span.number-huge__number {{timer < 10 ? '0' + timer : timer}}
        span.number-huge__unit s

      .number-huge(v-show="paused")
        span.number-huge__unit Paused

      .controls
        button.btn-plain.btn-square(@click="start" v-if="!counting") Start
        button.btn-plain.btn-square(@click="pause" v-if="counting && !paused") Pause
        button.btn-plain.btn-square(@click="paused = false" v-if="paused") Resume
        button.btn-plain.btn-square(@click="reset" v-if="counting") Reset


  .list-wrapper

    ol.list
      li.list__item(v-for="step, index in steps" :class="index === currentStep ? 'active' : 'inactive'") {{ step }}

</template>

<script>
export default {
  name: 'Warmup',
  data() {
    return {
      timer: 0,
      counting: false,
      countdown: null,
      finished: false,
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
      clearInterval(this.countdown)
      this.paused = false
      this.counting = false
      this.finished = true
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
      this.finished = false

      this.countdown = setInterval(() => {

        if(this.paused) {
          return
        }

        if(this.timer === 0) {
          clearInterval(this.countdown)
          this.counting = false
          this.finished = true
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr ;
  grid-template-areas: "list timer";
  gap: 2rem;
}

.timer-wrapper {
  grid-area: timer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.start-button {
  width: 100%;
  margin: auto;
}

.timer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.controls {
  width: 100%;
  display: flex;
  gap: var(--m);
  align-items: center;
  line-height: 1;
}

</style>
