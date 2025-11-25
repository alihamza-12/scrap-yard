import { createSlice } from "@reduxjs/toolkit";

const USER_DATA = "user";
const USER_TOKEN = "token";
const storedUser = JSON.parse(localStorage.getItem(USER_DATA));
const storedUserToken = JSON.parse(localStorage.getItem(USER_TOKEN));

const initialState = {
  user: storedUser || null,
  token: storedUserToken || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;

        //Saved in the local Storage
        localStorage.setItem(USER_DATA, JSON.stringify(state.user));
        localStorage.setItem(USER_TOKEN, JSON.stringify(state.token));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;

      //Remove from the local Storage
      localStorage.removeItem(USER_DATA)
      localStorage.removeItem(USER_TOKEN)
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
