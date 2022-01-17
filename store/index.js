// Actions
export const actions = {
  // counterUp({ state, commit }) {
  //   commit('setCounter', state.counter + 1)
  // },
}
// Mutations
export const mutations = {
  // --------------------------------
  // Warmup Controls
  // --------------------------------

  // Set step duration
  SET_STEP_DURATION(state, seconds) {
    state.warmup.seconds = seconds
  },
  // Set timer count
  SET_TIMER_COUNT(state, count) {
    state.warmup.timerCount = count
  },
  // Set speech
  SET_SPEECH(state) {
    state.warmup.speech = !state.warmup.speech
  },
  // Set sleep
  SET_SLEEP(state) {
    state.warmup.noSleep = !state.warmup.noSleep
  },
  // Set sleep
  SET_TIMER_ZERO(state) {
    state.warmup.noSleep = !state.warmup.noSleep
  },

  // --------------------------------
  // Workout Steps
  // --------------------------------

  // Set steps
  SET_DAY_STEPS(state, step) {
    state.workouts[step.dayKey].steps = step.value
  },
  // Edit step title
  EDIT_STEP_TITLE(state, editedStepTitle) {
    state.workouts[editedStepTitle.dayKey].steps[editedStepTitle.index].title =
      editedStepTitle.value
  },
  // Edit step Count
  EDIT_STEP_COUNT(state, editedStepCount) {
    state.workouts[editedStepCount.dayKey].steps[editedStepCount.index].count =
      editedStepCount.value
  },
  // Add step
  ADD_STEP(state, newStep) {
    state.workouts[newStep.dayKey].steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Remove step
  REMOVE_STEP(state, removeStep) {
    const newArr = [...state.workouts[removeStep.dayKey].steps]
    newArr.splice(removeStep.index, 1)
    state.workouts[removeStep.dayKey].steps = newArr
  },
}

// Getters
export const getters = {
  getNextStep(state) {
    // return state.warmup.steps[state.warmup.currentStep + 1]
  },
  getWarmup(state) {
    return state.warmup
  },
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
      'March in place (swing arms)',
      'Jog in place',
      'Jumping jacks',
      'Walking jacks',
      'March with pulldown',
      'Lateral step',
      'Opposite hand/toe touches',
      'Lateral butt kicks',
      'Mountain climbers',
      'Jump up & down, side to side',
      'Jump rope',
    ],
  },
  workouts: {
    sun: {
      title: 'Sunday',
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
  },
})
