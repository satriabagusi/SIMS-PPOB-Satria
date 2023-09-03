import { createSlice } from "@reduxjs/toolkit";

const localAccessToken = localStorage.getItem("token");
const localUserDetail = localStorage.getItem("user");

const initialState = {
    token: localAccessToken || null,
    user: localUserDetail || null,
    isAuthenticated: !!localAccessToken,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', action.payload);
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});


export const {setToken, setUser, logout} = authSlice.actions;
export default authSlice.reducer;