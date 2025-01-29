import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};
// http istek kullanirken createAsyncThunk kullanilir
export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //http istegi olmaz ise kullanilir !
  },
  extraReducers: (builder) => {
    //Http isteklerinde kullanilir
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
