import { createSlice } from "@reduxjs/toolkit";
import { RegisterThunk } from "../Thunks/RegisterThunk";
let initState = {};
let RegisterReducer = createSlice({
  name: "register",
  reducers: {},
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(RegisterThunk.pending, (state, action) => {})
      .addCase(RegisterThunk.fulfilled, (state, action) => {})
      .addCase(RegisterThunk.rejected, (state, action) => {});
  },
});
export default RegisterReducer.reducer;
