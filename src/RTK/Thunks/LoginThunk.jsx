import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let LoginThunk = createAsyncThunk(
  "login/LoginThunk",
  async (arg, ThunkApi) => {
    let { rejectWithValue } = ThunkApi;
    try {
      let res = await axios.post(`/users/login`, {
        email: arg.email,
        password: arg.pass,
      });
      // console.log(res.data);
      return res.data;
    } catch (error) {
      // console.log(error.response?.data);
      return rejectWithValue(error?.response);
    }
  }
);
