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
      button.btn.btn-icon.btn--border-graysettings__menu-btn(
        @click='settingsOpen = false'
      )
        svg.icon(height='24', width='24')
          use(href='#icon_x', v-if='settingsOpen')
          use(href='#icon_menu', v-else)

    //- Duration
    .settings__row
      label(for='set_seconds') {{ strings.stepDuration }}
        span.seconds {{ settingsSeconds }}
          span.s s
      //- ({{ (seconds / 60).toFixed(2) }} mins)
      input#set_seconds(
        type='range',
        v-model='settingsSeconds',
        @change='$emit("changeSeconds", settingsSeconds)',
        min='10',
        max='120',
        step='5'
      )
    //- Speech
    .settings__row
      label(for='set_speech')
        | {{ strings.announceSteps }}
        input#set_speech(
          type='checkbox',
          v-model='settingsSpeech',
          @change='$emit("toggleSpeech")'
        )
    //- Sleep
    .settings__row
      label(for='set_sleep')
        | {{ strings.sleepEnabled }}
        input#set_sleep(
          type='checkbox',
          v-model='settingsSleep',
          @change='$emit("toggleSleep")'
        )
</template>

<script>
export default {
  name: 'WarmupControls',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    seconds: {
      default: 30,
    },
    speech: {
      type: Boolean,
    },
    started: {
      type: Boolean,
    },
    finished: {
      type: Boolean,
    },
    noSleepEnabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      settingsOpen: false,
      settingsSeconds: 0,
      settingsSpeech: false,
      settingsSleep: false,
      strings: {
        back: 'Back',
        startWarmup: 'Start warmup',
        skip: 'Skip',
        settings: 'Settings',
        stepDuration: 'Step duration',
        announceSteps: 'Announce steps',
        sleepEnabled: 'Prevent device sleep mode',
      },
    }
  },
  mounted() {
    this.settingsSeconds = this.seconds
    this.settingsSpeech = this.speech
    this.settingsSleep = this.noSleepEnabled
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
  align-items: center;
  line-height: 1;

  &__btn {
    width: 100%;

    &--settings {
      width: auto;
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

// Settings
.settings {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  display: flex;
  font-size: var(--fs-lg);
  flex-direction: column;
  gap: var(--m-lg);
  width: 100%;
  bottom: calc(100% + var(--m));
  grid-area: mobile-nav;
  box-shadow: var(--bxs-lg-blue);
  padding: var(--m-lg);
  border-radius: var(--radius-2);

  &__title {
    font-size: var(--fs-xxl);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
  btn--border-gray &__menu-btn {
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
