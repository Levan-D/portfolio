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
    },
    closeModal: state => {
      state.modal.vis = false
      state.modal.type = ""
    },
  },
})

export const { setActiveLink, openModal, closeModal, setScreenWidth } =
  globalSlice.actions
export default globalSlice.reducer
