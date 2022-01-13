// Actions
export const actions = {
  counterUp({ state, commit }) {
    commit('setCounter', state.counter + 1)
  },
}
// Mutations
export const mutations = {
  SET_COUNTER(state, value) {
    state.counter = value
  },
  // Set steps
  SET_STEP(state, step) {
    state.workOuts[step.dayKey].steps = step.newSteps
  },
  // Edit step title
  EDIT_STEP_TITLE(state, editedStepTitle) {
    state.workOuts[editedStepTitle.dayKey].steps[editedStepTitle.index].title = editedStepTitle.value
  },
  // Edit step Count
  EDIT_STEP_COUNT(state, editedStepCount) {
    state.workOuts[editedStepCount.dayKey].steps[editedStepCount.index].count = editedStepCount.value
  },
  // Add step
  ADD_STEP(state, newStep) {
    console.log(newStep)
    state.workOuts[newStep.dayKey].steps.push({
      count: newStep.count,
      title: newStep.title,
    })
  },
  // Remove step
  REMOVE_STEP(step) {
    console.log(step)
    const newArr = [...this.editableSteps]
    newArr.splice(step, 1)
    this.editableSteps = newArr
  },
}
// Getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000
  },
}

// State
export const state = () => ({
  counter: 0,
  siteName: 'Work Out At Home',

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
