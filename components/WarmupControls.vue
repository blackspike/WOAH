<template lang="pug">
//- Controls
.controls
  //- Previous
  button.btn.controls__btn(@click='$emit("prevNext", "prev")', v-if='started') {{ strings.back }}
  //- Start
  button.btn.start-button(
    v-show='!started && !finished',
    @click='$emit("startRoutine")'
  ) {{ strings.startWarmup }}

  //- Show Settings
  button.btn.controls__btn.controls__btn--settings(
    @click='settingsOpen = !settingsOpen',
    v-if='started'
  )
    svg.icon(height='24', width='24')
      use(href='#icon_gear')

  //- Next
  button.btn.controls__btn(@click='$emit("prevNext", "next")', v-if='started') {{ strings.skip }}

  //- Settings menu
  aside.settings(v-if='settingsOpen')
    //- Title
    h2.settings__title
      | {{ strings.settings }}
      button.btn.btn-icon.settings__menu-btn(@click='settingsOpen = false')
        svg.icon(height='24', width='24')
          use(href='#icon_x', v-if='settingsOpen')
          use(href='#icon_menu', v-else)

    //- Duration
    .settings__row
      label(for='set_seconds') {{ strings.stepDuration }}
        span.seconds {{ getSetSeconds }}
          span.s s
      //- ({{ (seconds / 60).toFixed(2) }} mins)
      input#set_seconds(
        type='range',
        v-model='getSetSeconds',
        @change='$emit("restartStep")',
        min='10',
        max='120',
        step='5'
      )
    //- Speech
    .settings__row
      label(for='set_speech')
        | {{ strings.announceSteps }}
        input#set_speech(type='checkbox', v-model='getSetSpeech')
    //- Sleep
    .settings__row
      label(for='set_sleep')
        | {{ strings.sleepEnabled }}
        input#set_sleep(type='checkbox', v-model='getSetSleep')
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'WarmupControls',
  props: {
    started: {
      type: Boolean,
    },
    finished: {
      type: Boolean,
    },
  },
  data() {
    return {
      settingsOpen: false,
      strings: {
        back: 'Back',
        startWarmup: 'Start warmup',
        skip: 'Skip',
        settings: 'Settings',
        stepDuration: 'Step duration',
        announceSteps: 'Announce steps',
        sleepEnabled: 'Prevent device sleeping',
      },
    }
  },
  computed: {
    ...mapState({
      seconds: (state) => state.warmUp.seconds,
      speech: (state) => state.warmUp.speech,
      noSleep: (state) => state.warmUp.noSleep,
    }),

    // GetSet Seconds
    getSetSeconds: {
      get() {
        return this.seconds
      },
      set(value) {
        this.$store.commit('SET_SECONDS', value)
      },
    },

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
    ...mapMutations(['SET_SECONDS', 'SET_SPEECH', 'SET_SLEEP']),
  },
}
</script>

<style lang="scss" scoped>
// Controls
.controls {
  position: relative;
  grid-area: controls;
  width: 100%;
  display: flex;
  gap: var(--m);
  line-height: 1;

  &__btn {
    width: 100%;
    flex: 3;

    &--settings {
      align-items: center;
      flex: 1;
      width: auto;
      min-width: 5ch;
      min-height: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

.start-button {
  width: 100%;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  cursor: pointer;
  height: 0.5rem;
  border-radius: var(--radius-3);
  background-color: var(--brand-pink);
}
input[type='range']::-moz-range-track {
  width: 100%;
  cursor: pointer;
  height: 0.5rem;
  border-radius: var(--radius-3);
  background-color: var(--brand-pink);
}

// Settings menu
.settings {
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: var(--radius-3);
  bottom: calc(100% + var(--m));
  box-shadow: var(--bxs-lg-blue);
  display: flex;
  flex-direction: column;
  font-size: var(--fs-lg);
  gap: var(--m-lg);
  grid-area: mobile-nav;
  padding: var(--m-lg);
  position: absolute;
  width: 100%;
  z-index: var(--layer-4);

  &__title {
    font-size: var(--fs-xxl);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
  &__menu-btn {
    border-color: var(--gray-8);
    justify-content: flex-end;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: var(--m-sm);
    font-variant: tabular-nums;
  }

  label {
    font-size: var(--fs-xl);
    color: var(--brand-yellow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--m-sm);
  }

  input[type='checkbox'] {
    transform: scale(2);
  }

  .seconds {
    color: var(--gray-0);
  }

  .s {
    font-size: var(--fs-lg);
  }
}
</style>
