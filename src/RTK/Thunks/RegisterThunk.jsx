
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let RegisterThunk = createAsyncThunk(
  "register/RegisterThunk",
  async (arg, ThunkApi) => {
    let { rejectWithValue } = ThunkApi;
    try {
      let res = await axios.post(`/users/register`, {
        name: arg.name,
        email: arg.email,
        password: arg.pass,
      });

      return res.data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response);
    }
  }
);
