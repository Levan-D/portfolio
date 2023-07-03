/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  activeLink: string
  darkMode: boolean
  modal: {
    vis: boolean
    type: string
  }
}

const initialState: initialState = {
  activeLink: "",
  darkMode:
    typeof window !== "undefined"
      ? localStorage.getItem("darkMode") !== "false"
      : true,
  modal: {
    vis: false,
    type: "",
  },
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveLink: (
      state,
      action: PayloadAction<initialState["activeLink"]>
    ) => {
      state.activeLink = action.payload
    },
    setDarkMode: (state, action: PayloadAction<initialState["darkMode"]>) => {
      state.darkMode = action.payload
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", String(action.payload))
      }
    },
    openModal: (state, action: PayloadAction<initialState["modal"]>) => {
      state.modal.vis = action.payload.vis
      state.modal.type = action.payload.type
    },
    closeModal: (state) => {
      state.modal.vis = false
      state.modal.type = ""
    },
  },
})

export const { setActiveLink, openModal, closeModal, setDarkMode } =
  globalSlice.actions
export default globalSlice.reducer
