// import NoSleep from 'nosleep.js'
// const noSleep = new NoSleep()


// // Actions
// export const actions = {
//   enableNoSleep() {
//     console.log(state.settings)
//     noSleep.enable()
//   },
//   disableNoSleep() {
//     console.log(state.settings)
//     noSleep.disable()
//   },
// }
// Mutations
export const mutations = {
  // --------------------------------
  // Settings Controls
  // --------------------------------

  // Set speech
  SET_SPEECH(state) {
    state.settings.speech = !state.settings.speech
  },
  // Set sleep
  SET_SLEEP(state) {
    state.settings.noSleep = !state.settings.noSleep
  },

  // --------------------------------
  // Warmup Controls
  // --------------------------------

  // Set timer count
  SET_TIMER_COUNT(state, count) {
    state.warmup.timerCount = count
  },
  // Set all steps
  SET_WARMUP_STEPS(state, steps) {
    state.warmup.steps = steps
  },
  // Add step
  ADD_WARMUP_STEP(state, newStep) {
    state.warmup.steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Edit step title
  EDIT_WARMUP_STEP_TITLE(state, editedStepTitle) {
    state.warmup.steps[editedStepTitle.index].title = editedStepTitle.value
  },
  // Edit step Count
  EDIT_WARMUP_STEP_COUNT(state, editedStepCount) {
    state.warmup.steps[editedStepCount.index].count = editedStepCount.value
  },
  // Remove step
  REMOVE_WARMUP_STEP(state, removeStepIndex) {
    const newArr = [...state.warmup.steps]
    newArr.splice(removeStepIndex, 1)
    state.warmup.steps = newArr
  },
  // Increment or decrement step warmup step
  INCR_DECR_WARMUP_STEPS(state, incr) {
    state.warmup.steps.forEach((step) => {
      // Prevent negative count
      if (!incr && step.count > 1) {
        step.count--
      } else if (incr) {
        step.count++
      }
    })
  },

  // --------------------------------
  // Workout Steps
  // --------------------------------

  // Set workout steps
  SET_WORKOUT_DAY_STEPS(state, step) {
    state.workouts[step.dayKey].steps = step.value
  },
  // Edit workout step title
  EDIT_WORKOUT_STEP_TITLE(state, editedStepTitle) {
    state.workouts[editedStepTitle.dayKey].steps[editedStepTitle.index].title =
      editedStepTitle.value
  },
  // Edit workout step Count
  EDIT_WORKOUT_STEP_COUNT(state, editedStepCount) {
    state.workouts[editedStepCount.dayKey].steps[editedStepCount.index].count =
      editedStepCount.value
  },
  // Add workout step
  ADD_WORKOUT_STEP(state, newStep) {
    state.workouts[newStep.dayKey].steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Remove workout step
  REMOVE_WORKOUT_STEP(state, removeStep) {
    const newArr = [...state.workouts[removeStep.dayKey].steps]
    newArr.splice(removeStep.index, 1)
    state.workouts[removeStep.dayKey].steps = newArr
  },

  // Increment or decrement step workout step
  INCR_DECR_WORKOUT_STEPS(state, data) {
    state.workouts[data.dayKey].steps.forEach((step) => {

      // Prevent negative count
      if (!data.incr && step.count > 1) {
        step.count--
      } else if (data.incr) {
        step.count++
      }
    })
  },

  // --------------------------------
  // Reset State
  // --------------------------------

  RESET_STATE(state) {
    state.settings = state.initialState.settings
    state.warmup = state.initialState.warmup
    state.workouts = state.initialState.workouts
  },

  // --------------------------------
  // Reset State
  // --------------------------------

  IMPORT_DATA(state, data) {
    state.warmup = data.warmup
    state.workouts = data.workouts
  },
}

// Getters
export const getters = {
  // getWarmup(state) {
  //   return state.warmup
  // },
}

// State
export const state = () => ({
  siteName: 'Work Out At Home',
  settings: {
    speech: true,
    noSleep: true,
  },
  neck: {
    stepDuration: 6,
    reps: 4,
    steps: [
      {
        count: 5,
        title: 'Look to left',
      },
      {
        count: 5,
        title: 'Look to right',
      },
      {
        count: 5,
        title: 'Chin on chest',
      },
      {
        count: 5,
        title: 'Push chin forward',
      },
      {
        count: 5,
        title: 'Tilt head left',
      },
      {
        count: 5,
        title: 'Tilt head right',
      },
    ],
  },
  warmup: {
    stepDuration: 25,
    steps: [
      {
        count: 20,
        title: 'March in place (swing arms)',
      },
      {
        count: 20,
        title: 'Jog in place',
      },
      {
        count: 20,
        title: 'Jumping jacks',
      },
      {
        count: 20,
        title: 'Walking jacks',
      },
      {
        count: 20,
        title: 'March with pulldown',
      },
      {
        count: 20,
        title: 'Lateral step',
      },
      {
        count: 20,
        title: 'Opposite hand/toe touches',
      },
      {
        count: 20,
        title: 'Lateral butt kicks',
      },
      {
        count: 20,
        title: 'Mountain climbers',
      },
      {
        count: 20,
        title: 'Jump up & down, side to side',
      },
      {
        count: 20,
        title: 'Jump rope',
      },
    ],
  },
  workouts: {
    sun: {
      title: 'Sunday',
      steps: [],
    },
    mon: {
      title: 'Monday',
      steps: [
        {
          count: 20,
          title: 'Bodyweight squats',
        },
        {
          count: 10,
          title: 'Push-ups',
        },
        {
          count: 20,
          title: 'Walking lunges',
        },
        {
          count: 10,
          title: 'Dumbbell rows × 2',
        },
        {
          count: 15,
          title: 'Second Plank',
        },
        {
          count: 30,
          title: 'Jumping jacks',
        },
      ],
    },
    tue: {
      title: 'Tuesday',
      steps: [
        {
          count: 25,
          title: 'Min. Cardio Run',
        },
      ],
    },
    wed: {
      title: 'Wednesday',
      steps: [
        {
          count: 20,
          title: 'Bodyweight squats',
        },
        {
          count: 10,
          title: 'Push-ups',
        },
        {
          count: 20,
          title: 'Walking lunges',
        },
        {
          count: 10,
          title: 'Dumbbell rows × 2',
        },
        {
          count: 15,
          title: 'Second Plank',
        },
        {
          count: 30,
          title: 'Jumping jacks',
        },
      ],
    },
    thu: {
      title: 'Thursday',
      steps: [
        {
          count: 25,
          title: 'Min. Cardio Indoor bike',
        },
      ],
    },
    fri: {
      title: 'Friday',
      steps: [
        {
          count: 20,
          title: 'Bodyweight squats',
        },
        {
          count: 10,
          title: 'Push-ups',
        },
        {
          count: 20,
          title: 'Walking lunges',
        },
        {
          count: 10,
          title: 'Dumbbell rows × 2',
        },
        {
          count: 15,
          title: 'Second Plank',
        },
        {
          count: 30,
          title: 'Jumping jacks',
        },
      ],
    },
    sat: {
      title: 'Saturday',
      steps: [
        {
          count: 25,
          title: 'Min. Cardio Run',
        },
      ],
    },
  },
  // Intitial state is just a copy of the original state so we can reset the app! Prob a better way...

  initialState: {
    settings: {
      speech: true,
      noSleep: true,
    },
    warmup: {
      stepDuration: 25,
      steps: [
        {
          count: 20,
          title: 'March in place (swing arms)',
        },
        {
          count: 20,
          title: 'Jog in place',
        },
        {
          count: 20,
          title: 'Jumping jacks',
        },
        {
          count: 20,
          title: 'Walking jacks',
        },
        {
          count: 20,
          title: 'March with pulldown',
        },
        {
          count: 20,
          title: 'Lateral step',
        },
        {
          count: 20,
          title: 'Opposite hand/toe touches',
        },
        {
          count: 20,
          title: 'Lateral butt kicks',
        },
        {
          count: 20,
          title: 'Mountain climbers',
        },
        {
          count: 20,
          title: 'Jump up & down, side to side',
        },
        {
          count: 20,
          title: 'Jump rope',
        },
      ],
    },
    workouts: {
      sun: {
        title: 'Sunday',
        steps: [],
      },
      mon: {
        title: 'Monday',
        steps: [
          {
            count: 20,
            title: 'Bodyweight squats',
          },
          {
            count: 10,
            title: 'Push-ups',
          },
          {
            count: 20,
            title: 'Walking lunges',
          },
          {
            count: 10,
            title: 'Dumbbell rows × 2',
          },
          {
            count: 15,
            title: 'Second Plank',
          },
          {
            count: 30,
            title: 'Jumping jacks',
          },
        ],
      },
      tue: {
        title: 'Tuesday',
        steps: [
          {
            count: 25,
            title: 'Min. Cardio Run',
          },
        ],
      },
      wed: {
        title: 'Wednesday',
        steps: [
          {
            count: 20,
            title: 'Bodyweight squats',
          },
          {
            count: 10,
            title: 'Push-ups',
          },
          {
            count: 20,
            title: 'Walking lunges',
          },
          {
            count: 10,
            title: 'Dumbbell rows × 2',
          },
          {
            count: 15,
            title: 'Second Plank',
          },
          {
            count: 30,
            title: 'Jumping jacks',
          },
        ],
      },
      thu: {
        title: 'Thursday',
        steps: [
          {
            count: 25,
            title: 'Min. Cardio Indoor bike',
          },
        ],
      },
      fri: {
        title: 'Friday',
        steps: [
          {
            count: 20,
            title: 'Bodyweight squats',
          },
          {
            count: 10,
            title: 'Push-ups',
          },
          {
            count: 20,
            title: 'Walking lunges',
          },
          {
            count: 10,
            title: 'Dumbbell rows × 2',
          },
          {
            count: 15,
            title: 'Second Plank',
          },
          {
            count: 30,
            title: 'Jumping jacks',
          },
        ],
      },
      sat: {
        title: 'Saturday',
        steps: [
          {
            count: 25,
            title: 'Min. Cardio Run',
          },
        ],
      },
    },
  },
})
