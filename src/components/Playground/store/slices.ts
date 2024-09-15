import { createSlice } from "@reduxjs/toolkit"
import type { IPlayGroundState } from "./types"
import { ARR_ARROW } from "../constants/constants"

const initialState: IPlayGroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnsuccessful: 0,
}

export const playGroundSlice = createSlice({
  name: "playGround",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },
    setSteps: state => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW.length)

      state.steps.push({
        currentValue: ARR_ARROW[randomKeys],
        enteredValue: null,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSucces = step.currentValue === action.payload

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSucces,
          }
        }

        if (isSucces) {
          state.totalSuccessful += 1
        } else {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0
        }
      }
    },
    setUnsuccess: state => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue === null) {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0
          state.steps[state.currentStep - 1] = {
            ...step,

            success: false,
          }
        }
      }
    },
    resetStore: () => initialState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  setUnsuccess,
  resetStore,
} = playGroundSlice.actions

export default playGroundSlice.reducer
