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

  //- Import/Export
  SettingsExport

  //- Reset
  .settings__row.settings__row--plain
    //- Reset?
    button.btn.settings__button.settings__button--danger(
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
        resetState: 'Reset data',
        resetStateConfirm: 'Confirm delete ',
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
  margin: var(--m) var(--m);
  max-width: var(--mw-content);
  padding: var(--m-lg) clamp(var(--m), 5vw, var(--m-lg));
  user-select: none;

  @include media-query('lg') {
    margin: var(--m) auto;
    width: 100%;
  }

  &__title {
    font-family: var(--ff-brand);
    font-size: var(--fs-lg);
    margin-bottom: var(--m-lg);
  }

  // Rows
  &__row {
    align-items: center;
    background-color: var(--gray-9);
    border-radius: var(--radius-2);
    border: 2px solid var(--gray-9);
    display: flex;
    gap: var(--m);
    justify-content: space-between;
    margin-bottom: var(--m);
    padding: var(--m);

    &--plain {
      background-color: unset;
      border-radius: unset;
      border: unset;
      margin-bottom: unset;
      padding: unset;
    }
  }

  &__label {
    flex: 1;

    text-transform: uppercase;
  }

  input[type='checkbox'] {
    transform: scale(2);
  }

  &__button {
    flex: 1;

    &--danger {
      margin-top: var(--m);
      background-image: linear-gradient(rgb(240, 69, 46), rgb(141, 26, 26));

      &:hover {
        animation: none;
      }

      &::after {
        display: none;
      }
    }
  }

  &__reset-confirmed {
    text-transform: uppercase;
    color: var(--brand-orange);
    text-align: center;
    flex: 1;
    padding: var(--m) 0;
  }
}
</style>
