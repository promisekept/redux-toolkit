import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    displayNum: (state, action) => {
      console.log("In displayNum");
      const number = {
        five: 5,
      };
      state.push(number);
    },
  },
});

export const { displayNum } = counterSlice.actions;
export default counterSlice.reducer;
