import {createSlice, configureStore} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: new Array(10e2).fill(0, 0),
    reducers: {
        increment: (state) => {
            state.forEach((_, index) => {
                state[index] = state[index] + 1
            })
        }
    }
})

export const {increment} = counterSlice.actions;

const counterReducer = counterSlice.reducer; 

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

