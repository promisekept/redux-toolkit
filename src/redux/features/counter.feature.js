import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: [0],
  reducers: {
    displayNum: (state, action) => {
      state.push(state[state.length - 1] + 1);
      console.log(state[state.length - 1]);
    },
  },
});

export const { displayNum } = counterSlice.actions;
export default counterSlice.reducer;
