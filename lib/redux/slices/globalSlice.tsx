/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface initialState {
  screenWidth: number
  activeLink: string
  darkMode: boolean
  sider: boolean
  modal: {
    vis: boolean
    type: string
  }
}

const initialState: initialState = {
  screenWidth: typeof window !== "undefined" ? window.innerWidth : 1200,
  activeLink: "",
  darkMode:
    typeof window !== "undefined" ? localStorage.getItem("darkMode") !== "false" : true,
  sider: false,
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
    setDarkMode: (state, action: PayloadAction<initialState["darkMode"]>) => {
      state.darkMode = action.payload
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", String(action.payload))
      }
    },
    setSider: (state, action: PayloadAction<initialState["sider"]>) => {
      state.sider = action.payload
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

export const {
  setActiveLink,
  openModal,
  closeModal,
  setDarkMode,
  setScreenWidth,
  setSider,
} = globalSlice.actions
export default globalSlice.reducer
