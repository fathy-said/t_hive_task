import { createSlice } from "@reduxjs/toolkit";

let initState = {
  typeAlert: false,
  message: null,
};

let MessageReducer = createSlice({
  name: "message",

  initialState: initState,
  reducers: {
    closeAlert: (state, action) => {
      state.typeAlert = false;
      state.message = null;
    },
    openAlert: (state, action) => {
      state.typeAlert = true;
    },
    MessageAlert: (state, action) => {
      state.message = action.payload;
    },
  },
});
export default MessageReducer.reducer;

export let { closeAlert, openAlert, MessageAlert } = MessageReducer.actions;
