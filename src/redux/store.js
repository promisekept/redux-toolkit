import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter.feature";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
