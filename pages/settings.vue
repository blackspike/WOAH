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

  //- Reset
  .settings__row
    //- Reset?
    button.btn.settings__button(
      v-if='!resetConfirm',
      @click='resetConfirm = true'
    ) {{ strings.resetState }}

    //- Reset confirm
    button.btn.settings__button.settings__button--danger(
      v-if='resetConfirm && !resetDone',
      @click='resetVuex'
    ) {{ strings.resetStateConfirm }}

    //- Reset confirmed
    p.settings__reset-confirmed(v-if='resetDone') {{ strings.resetStateConfirmed }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      resetDone: false,
      resetConfirm: false,
      strings: {
        settings: 'Settings',
        announceSteps: 'Announce steps',
        sleepEnabled: 'Prevent device sleeping',
        resetState: 'Reset all settings & steps',
        resetStateConfirm: 'This will delete all your changes! ',
        resetStateConfirmed: 'All settings reset.',
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
    ...mapMutations(['SET_SPEECH', 'SET_SLEEP', 'RESET_STATE']),

    resetVuex() {
      this.resetDone = true
      this.$store.commit('RESET_STATE')
    },
  },
}
</script>

<style lang="scss" scoped>
.settings {
  flex: 0;
  margin: 0 var(--m);
  padding: var(--m-lg) 5vw;
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

  &__button {
    font-size: var(--fs-lg);
    flex: 1;

    &--danger {
      border-color: var(--brand-orange);
      background-color: var(--brand-orange);
      color: var(--gray-0);
    }
  }

  &__reset-confirmed {
    font-weight: var(--fw-bd);
    text-transform: uppercase;
    color: var(--brand-orange);
    text-align: center;
    flex: 1;
  }
}
</style>
