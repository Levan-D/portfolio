/** @format */

import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "./slices/globalSlice"

export const reduxStore = configureStore({
  reducer: { global: globalReducer },
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
