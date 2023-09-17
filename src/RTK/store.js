import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Reducers/LoginReducer.jsx";
import RegisterReducer from "./Reducers/RegisterReducer.jsx";
import MessageReducer from "./Reducers/MessageReducer.jsx";
export let Store = configureStore({
  reducer: {
    LoginReducer,
    RegisterReducer,
    MessageReducer,
  },
});
