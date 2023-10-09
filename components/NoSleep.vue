<template lang="pug">
//- No sleep
//- .no-sleep
//-   .form
//-     button.btn(@click="toggleNoSleep") locked: {{ locked }}
//-   .msg {{ noSleepStatus }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NoSleep',
  data() {
    return {
      locked: false,
      noSleepStatus: '',
    }
  },
  computed: {
    ...mapState({
      noSleep: (state) => state.settings.noSleep,
    }),
  },
  mounted() {


    // this.noSleepStatus = new NoSleep()
  },
  methods: {
    async toggleNoSleep() {
      console.log(window.navigator)

      if ("wakeLock" in window.navigator) {



        console.log(
          "Screen Wake Lock API supported!"
        )
      } else {
        console.log(
          "Wake lock is not supported by this browser."
        )
      }


      console.log(navigator.wakeLock)

      try {
        if (!this.locked) {
          await navigator.wakeLock.request("screen")
          this.noSleepStatus = "Wake Lock is active!"
          this.locked = true
          console.log('locked')

        } else {
          await navigator.wakeLock.release()
          this.noSleepStatus = "Wake Lock is inactive"
          this.locked = false
          console.log('unlocked')

        }
      } catch (err) {
        // The Wake Lock request has failed - usually system related, such as battery.
        this.noSleepStatus = `${err.name}, ${err.message}`
        this.noSleepStatus = "Wake Lock is inactive"
        this.locked = false
      }
      // if (!this.noSleepStatus) return
      // enable ? this.noSleepStatus.enable() : this.noSleepStatus.disable()
      // console.info(`NoSleep enabled: ${enable}`)
    },
  },
}
</script>