import { createSlice } from "@reduxjs/toolkit";
import { JsData } from "../data/JsData";

const initialState = {
  quizType: {},
  data: JsData,
  questionIndex: 0,
  score: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setScore: (state) => {
      state.score += 1;
    },
    setQuesIndex: (state) => {
      state.questionIndex += 1;
    },
    setQuizType: (state, action) => {
      state.quizType = action.payload;
    },
  },
});
export const { setScore, setQuesIndex, setQuizType } = quizSlice.actions;
export default quizSlice.reducer;
