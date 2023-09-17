import { createSlice } from "@reduxjs/toolkit";
import { LoginThunk } from "../Thunks/LoginThunk";
let initState = {
  token: null,
};
let LoginReducer = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    changeToken: (state, action) => {
      if (action.payload?.token !== null) {
        state.token = action.payload.token;
      } else {
        state.token = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state, action) => {})
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.token = action.payload?.user[0]?.token;
        localStorage.setItem(
          "AccessTokenTLive",
          action.payload?.user[0]?.token
        );
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        localStorage.removeItem("AccessTokenTLive");
      });
  },
});
export default LoginReducer.reducer;
export let { changeToken } = LoginReducer.actions;
