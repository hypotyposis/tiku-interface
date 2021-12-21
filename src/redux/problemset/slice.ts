import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';
import questions from "../../mockdata/questions.json";

enableMapSet();

interface ProblemSetState {
    // completedQuestions: Set<string>;
    answers: Map<string, string>
}

const initialState: ProblemSetState = {
    // completedQuestions: new Set(),
    answers: new Map()
}

export const problemSetSlice = createSlice({
    name: 'problemSet',
    initialState,
    reducers: {
        update: (state, action) => {
            // state.completedQuestions = action.payload;
            console.log(action)
            const [pair, ] = action.payload;
            console.log("pair ", pair)
            // console.log(key)
            // console.log(value)
            state.answers.set(pair[0], pair[1]);
            console.log(state.answers)
            // state.answers = action.payload;
        }
    }
})