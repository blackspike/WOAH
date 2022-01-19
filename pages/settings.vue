<template lang="pug">
section.settings.card-bg
  h2.settings__title App Settings

  //- Speech
  .settings__row
    label.settings__label(for='set_speech') {{ strings.announceSteps }}
    input#set_speech.settings__input(type='checkbox', v-model='getSetSpeech')

  //- Sleep
  .settings__row
    label.settings__label(for='set_sleep') {{ strings.sleepEnabled }}
    input#set_sleep.settings__input(type='checkbox', v-model='getSetSleep')
</template>

<script>
import { mapMutations } from 'vuex'

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
    // GetSet Speech
    getSetSpeech: {
      get() {
        return this.$store.state.settings.speech
      },
      set() {
        this.$store.commit('SET_SPEECH')
      },
    },

    // GetSet sleep
    getSetSleep: {
      get() {
        return this.$store.state.settings.noSleep
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
  flex: 0;
  margin: 0 var(--m);
  padding: var(--m-lg) var(--m);
  user-select: none;

  &__title {
    font-family: var(--ff-brand);
    font-size: var(--fs-lg);
    margin-bottom: var(--m-lg);
  }
}

// Settings menu
.settings {
  // Rows
  &__row {
    align-items: baseline;
    align-items: center;
    background-color: var(--gray-9);
    border-radius: var(--radius-2);
    border: 2px solid var(--gray-9);
    display: flex;
    display: flex;
    gap: var(--m-sm);
    gap: var(--m);
    justify-content: space-between;
    margin-bottom: var(--m);
    padding: var(--m);
  }

  &__label {
    flex: 1;
    font-weight: var(--fw-bd);
    text-transform: uppercase;
  }

  input[type='checkbox'] {
    transform: scale(2);
  }
}
</style>
