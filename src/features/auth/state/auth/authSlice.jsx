

import { createSlice } from "@reduxjs/toolkit"


let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isliading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload
            state.isliading = false
        },
        removeEmployee: (state) => {
            state.employee = null
            state.isliading = false
        },
    },
})


export let { addEmployee, removeEmployee } = authSlice.actions
export default authSlice.reducer