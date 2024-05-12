/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  screenWidth: number
  activeLink: string

  modal: {
    vis: boolean
    type: string
  }
}

const initialState: initialState = {
  screenWidth: 1200,
  activeLink: "",
  modal: {
    vis: false,
    type: "",
  },
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setScreenWidth: (state, action: PayloadAction<initialState["screenWidth"]>) => {
      state.screenWidth = action.payload
    },
    setActiveLink: (state, action: PayloadAction<initialState["activeLink"]>) => {
      state.activeLink = action.payload
    },

    openModal: (state, action: PayloadAction<initialState["modal"]>) => {
      state.modal.vis = action.payload.vis
      state.modal.type = action.payload.type

      if (typeof window !== "undefined" && state.modal.vis) {
        document.documentElement.style.overflowY = "hidden"
      }
    },
    closeModal: state => {
      state.modal.vis = false
      state.modal.type = ""

      if (typeof window !== "undefined" && !state.modal.vis) {
        document.documentElement.style.overflowY = "unset"
      }
    },
  },
})

export const { setActiveLink, openModal, closeModal, setScreenWidth } =
  globalSlice.actions
export default globalSlice.reducer
