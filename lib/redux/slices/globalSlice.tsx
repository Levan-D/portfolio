/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface globalState {
  activeLink: string
  modal: boolean
}

const initialState: globalState = {
    activeLink: "",
  modal: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<globalState["activeLink"]>) => {
      state.activeLink = action.payload
    },
    toggleContact: (state, action: PayloadAction<globalState["modal"]>) => {
      state.modal = action.payload
    },
  },
})

export const { setActiveLink, toggleContact } = globalSlice.actions
export default globalSlice.reducer
