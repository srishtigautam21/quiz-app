import React from "react";
import { JsData } from "../data/JsData";
import { useState } from "react";
import "./QuestionsPage.css";

const QuestionsPage = () => {
  const [jsData, setJsData] = useState(JsData);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const handleNextQuestion = () => {
    setQuestionIndex((q) => q + 1);
  };
  return (
    <div className='wrapper'>
      <div>Score : {score} / 10 </div>

      <div className='quesBackground'>
        <div>
          {jsData[questionIndex].id}. {jsData[questionIndex].question}
        </div>
        <div className='inputWrapper'>
          {jsData[questionIndex].options.map((op) => (
            <label>
              <input type='radio' />
              {op}
            </label>
          ))}
        </div>
      </div>
      <button
        type='button'
        onClick={handleNextQuestion}
        className=' bg-cyan-900 text-white shadow-lg shadow-gray-400/50 px-3 py-0.5 rounded-md hover:bg-cyan-700'
      >
        Next
      </button>
    </div>
  );
};

export { QuestionsPage };
