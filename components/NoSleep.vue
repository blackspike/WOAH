<template lang="pug">
//- No sleep
.no-sleep
</template>

<script>
import NoSleep from 'nosleep.js'
import { mapState } from 'vuex'

export default {
  name: 'NoSleep',
  data() {
    return {
      noSleepStatus: null,
    }
  },
  computed: {
    ...mapState({
      noSleep: (state) => state.settings.noSleep,
    }),
  },
  mounted() {
    this.noSleepStatus = new NoSleep()
  },
  methods: {
    toggleNoSleep(enable = true) {
      if (!this.noSleepStatus) return
      enable ? this.noSleepStatus.enable() : this.noSleepStatus.disable()
      console.info(`NoSleep enabled: ${enable}`)
    },
  },
}
</script>