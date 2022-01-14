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
    state.warmUp.seconds = seconds
  },
  // Set current step
  SET_CURRENT_STEP(state, step) {
    state.warmUp.currentStep = step
  },
  // Set speech
  SET_SPEECH(state) {
    state.warmUp.speech = !state.warmUp.speech
  },
  // Set sleep
  SET_SLEEP(state) {
    state.warmUp.noSleep = !state.warmUp.noSleep
  },

  // --------------------------------
  // Workout Steps
  // --------------------------------

  // Set steps
  SET_DAY_STEPS(state, step) {
    state.workOuts[step.dayKey].steps = step.value
  },
  // Edit step title
  EDIT_STEP_TITLE(state, editedStepTitle) {
    state.workOuts[editedStepTitle.dayKey].steps[editedStepTitle.index].title =
      editedStepTitle.value
  },
  // Edit step Count
  EDIT_STEP_COUNT(state, editedStepCount) {
    state.workOuts[editedStepCount.dayKey].steps[editedStepCount.index].count =
      editedStepCount.value
  },
  // Add step
  ADD_STEP(state, newStep) {
    state.workOuts[newStep.dayKey].steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Remove step
  REMOVE_STEP(state, removeStep) {
    const newArr = [...state.workOuts[removeStep.dayKey].steps]
    newArr.splice(removeStep.index, 1)
    state.workOuts[removeStep.dayKey].steps = newArr
  },
}
// Getters
export const getters = {
  // myGetter(state) {
  //   return state.counter + 1000
  // },
}

// State
export const state = () => ({
  siteName: 'Work Out At Home',
  settings: {
    speech: true,
    noSleep: true,
  },
  warmUp: {
    stepDuration: 8,
    currentStep: 0,
    steps: [
      'March in place (swing arms)',
      'Jog in place',
      'Jumping jacks',
      'Walking jacks',
      'March with pull down',
      'Lateral step',
      'Opposite hand/toe touches',
      'Lateral butt kicks',
      'Mountain climbers',
      'Jump up & down, side to side',
      'Jump rope',
    ],
  },
  workOuts: {
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
