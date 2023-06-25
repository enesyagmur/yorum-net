import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: JSON.parse(localStorage.getItem("users")),
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
