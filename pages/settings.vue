<template lang="pug">
section.settings.card-bg
  h2.settings__title App Settings

  //- Speech
  .settings__row
    label(for='set_speech') {{ strings.announceSteps }}
    input#set_speech(type='checkbox', v-model='getSetSpeech')

  //- Sleep
  .settings__row
    label(for='set_sleep') {{ strings.sleepEnabled }}
    input#set_sleep(type='checkbox', v-model='getSetSleep')
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      strings: {
        settings: 'Settings',
        announceSteps: 'Announce steps',
        sleepEnabled: 'Prevent device sleeping',
      },
    }
  },
  computed: {
    ...mapState({
      speech: (state) => state.settings.speech,
      noSleep: (state) => state.settings.noSleep,
    }),

    // GetSet Speech
    getSetSpeech: {
      get() {
        return this.speech
      },
      set() {
        this.$store.commit('SET_SPEECH')
      },
    },

    // GetSet sleep
    getSetSleep: {
      get() {
        return this.noSleep
      },
      set() {
        this.$store.commit('SET_SLEEP')
      },
    },
  },
  methods: {
    ...mapMutations(['SET_SPEECH', 'SET_SLEEP']),
  },
}
</script>

<style lang="scss" scoped>
.settings {
  margin: 0 var(--m);
  padding: var(--m-lg);
  user-select: none;
  flex: 0;

  &__title {
    font-family: var(--ff-brand);
    font-size: var(--fs-lg);
    margin-bottom: var(--m-lg);
  }
}

// Settings menu
.settings {
  &__row {
    display: flex;
    gap: var(--m-sm);
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--m);
    align-items: baseline;
    background-color: var(--gray-9);
    border-radius: var(--radius-2);
    border: 2px solid var(--gray-9);
    display: flex;
    gap: var(--m-sm);
    padding: var(--m);
  }

  label {
    text-transform: uppercase;
    font-weight: var(--fw-bd);
    // font-size: var(--fs-lg);
  }

  input[type='checkbox'] {
    transform: scale(2);
  }
}
</style>
