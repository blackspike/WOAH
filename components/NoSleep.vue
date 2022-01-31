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
      noSleep: null,
    }
  },
  computed: {
    ...mapState({
      noSleep: (state) => state.settings.noSleep,
    }),
  },
  mounted() {
    this.noSleep = new NoSleep()
  },
  methods: {
    toggleNoSleep(enable = true) {
      if (!this.noSleep) return
      enable ? this.noSleep.enable() : this.noSleep.disable()
      console.info(`NoSleep enabled: ${enable}`)
    },
  },
}
</script>