import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { problemSetSlice } from "./problemset/slice"

const rootReducer = combineReducers({
    problemSet: problemSetSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default {store}