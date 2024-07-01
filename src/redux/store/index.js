import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import postReducer from "../reducers/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export default store;
