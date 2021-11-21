<template lang="pug">
.timer

  .number-huge
    span.number-huge__number {{timer < 10 ? '0' + timer : timer}}
    span.number-huge__unit s

  .controls
    button.btn-plain.btn-square(@click="start" v-if="!counting") Start
    button.btn-plain.btn-square(@click="pause" v-if="counting") Pause
    button.btn-plain.btn-square(@click="reset" v-if="counting") Reset

</template>

<script>
export default {
  name: 'Timer',
  props: {
    seconds: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      timer: 0,
      counting: false,
      countdown: null,
      finished: false
    }
  },
  mounted() {
    this.timer = this.seconds
  },
  methods: {
    reset() {
      console.info('resetting...')
      clearInterval(this.countdown)
      this.counting = false
      this.finished = true
      this.timer = this.seconds
    },
    pause() {
      console.info('pausing...')
      clearInterval(this.countdown)
      this.counting = false
      this.finished = true
    },
    start() {
      console.info('starting...')
      this.timer = this.seconds
      this.counting = true
      this.finished = false

      this.countdown = setInterval(() => {
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