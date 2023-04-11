import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice ({
    name: "logged",
    initialState: {
        loggedIn: false
    },
    reducers: {
        login: ( state ) => {
            console.log("inside login action")
            return { loggedIn: true }
        },
        logout: ( state ) => {
            console.log("inside logout action")
            return { loggedIn: false }
        }
    }
})

export const { login, logout } = loggedSlice.actions
export default loggedSlice.reducer;