import React from "react";
import { JsData, HTMLData, CSSData, ReactData } from "../data/JsData";
import { useState, useEffect } from "react";
import "./QuestionsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setQuesIndex } from "../redux/quizSlice";

const QuestionsPage = () => {
  const { questionIndex, score, quizType } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [data, setData] = useState(JsData);
  useEffect(() => {
    if (quizType === "HTMLData") setData(HTMLData);
    else if (quizType === "CSSData") setData(CSSData);
    else if (quizType === "ReactData") setData(ReactData);
    else if (quizType === "JsData") setData(JsData);
  }, [quizType]); //useEffect

  console.log(questionIndex, score, quizType);
  return (
    <div className='wrapper'>
      <div>Score : {score} / 10 </div>

      <div className='quesBackground'>
        <div>
          {data[questionIndex].id}. {data[questionIndex].question}
        </div>
        <div className='inputWrapper'>
          {data[questionIndex].options.map((op) => (
            <label>
              <input type='radio' />
              {op}
            </label>
          ))}
        </div>
      </div>
      <button
        type='button'
        onClick={() => dispatch(setQuesIndex())}
        className=' bg-cyan-900 text-white shadow-lg shadow-gray-400/50 px-3 py-0.5 rounded-md hover:bg-cyan-700'
      >
        Next
      </button>
    </div>
  );
};

export { QuestionsPage };
