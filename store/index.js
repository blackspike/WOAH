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

  // --------------------------------
  // Workout Steps
  // --------------------------------

  // Set steps
  SET_WORKOUT_DAY_STEPS(state, step) {
    state.workouts[step.dayKey].steps = step.value
  },
  // Edit step title
  EDIT_WORKOUT_STEP_TITLE(state, editedStepTitle) {
    state.workouts[editedStepTitle.dayKey].title = editedStepTitle.value
  },
  // Edit step Count
  EDIT_WORKOUT_STEP_COUNT(state, editedStepCount) {
    state.workouts[editedStepCount.dayKey].count = editedStepCount.value
  },
  // Add step
  ADD_WORKOUT_STEP(state, newStep) {
    state.workouts[newStep.dayKey].steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Remove step
  REMOVE_WORKOUT_STEP(state, removeStep) {
    const newArr = [...state.workouts[removeStep.dayKey].steps]
    newArr.splice(removeStep.index, 1)
    state.workouts[removeStep.dayKey].steps = newArr
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
  warmup: {
    stepDuration: 25,
    steps: [
      {
        count: 25,
        title: 'March in place (swing arms)',
      },
      {
        count: 25,
        title: 'Jog in place',
      },
      {
        count: 25,
        title: 'Jumping jacks',
      },
      {
        count: 25,
        title: 'Walking jacks',
      },
      {
        count: 25,
        title: 'March with pulldown',
      },
      {
        count: 25,
        title: 'Lateral step',
      },
      {
        count: 25,
        title: 'Opposite hand/toe touches',
      },
      {
        count: 25,
        title: 'Lateral butt kicks',
      },
      {
        count: 25,
        title: 'Mountain climbers',
      },
      {
        count: 25,
        title: 'Jump up & down, side to side',
      },
      {
        count: 25,
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
})
