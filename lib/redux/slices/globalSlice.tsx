/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface globalState {
  activeLink: string
  modal: {
    vis: boolean
    type: string
  }
}

const initialState: globalState = {
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
    setActiveLink: (state, action: PayloadAction<globalState["activeLink"]>) => {
      state.activeLink = action.payload
    },
    openModal: (state, action: PayloadAction<globalState["modal"]>) => {
      state.modal.vis = action.payload.vis
      state.modal.type = action.payload.type
    },
    closeModal: state => {
      state.modal.vis = false
      state.modal.type = ""
    },
  },
})

export const { setActiveLink, openModal, closeModal } = globalSlice.actions
export default globalSlice.reducer
