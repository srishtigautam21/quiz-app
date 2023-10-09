import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
console.log("store", store);
export default store;
