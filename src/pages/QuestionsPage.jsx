import React from "react";
import { JsData, HTMLData, CSSData, ReactData } from "../data/JsData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setQuesIndex, setScore } from "../redux/quizSlice";

const QuestionsPage = () => {
  const { questionIndex, score, quizType } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [data, setData] = useState(JsData);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (quizType === "HTMLData") {
      localStorage.setItem("quizData", JSON.stringify(HTMLData));
    } else if (quizType === "CSSData") {
      localStorage.setItem("quizData", JSON.stringify(CSSData));
    } else if (quizType === "ReactData") {
      localStorage.setItem("quizData", JSON.stringify(ReactData));
    } else if (quizType === "JsData") {
      localStorage.setItem("quizData", JSON.stringify(JsData));
    }
  }, [quizType]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("quizData")));
  }, []);

  console.log(questionIndex, score, quizType);
  const handleAnswers = () => {
    if (questionIndex === data.length - 1) {
      navigate("/scores");
    } else {
      dispatch(setQuesIndex());
      console.log("answer", answer);
      // setAnswer("");
    }
  };
  const checkAnswer = () => {
    if (answer === data[questionIndex].answer) {
      dispatch(setScore(false));
    }
  };
  return (
    <div className='wrapper'>
      {/* <div className='text-2xl font-bold'>{quizType} Quiz</div> */}
      <div className='bg-orange-100 px-2 py-1 rounded-md font-medium'>
        Score : {score} / 5
      </div>
      <div className='quesBackground'>
        <div className='text-xl font-bold'>
          {data[questionIndex].id}. {data[questionIndex].question}
        </div>
        <div className='inputWrapper'>
          {data[questionIndex].options.map((op) => (
            <label className='py-0.5 text-xl px-0.5'>
              <input
                type='radio'
                value={answer}
                onChange={() => setAnswer(op)}
                checked={answer === op}
                className='px-0.5'
              />
              {op}
            </label>
          ))}
        </div>
      </div>
      {/* <button
        onClick={() => checkAnswer()}
        className=' bg-cyan-900 text-white shadow-lg shadow-gray-400/50 px-3 py-0.5 rounded-md hover:bg-cyan-700'
      >
        Let's Check
      </button> */}
      <button
        type='button'
        onClick={() => {
          handleAnswers();
          checkAnswer();
        }}
        className=' bg-cyan-900 text-white shadow-lg shadow-gray-400/50 px-3 py-0.5 rounded-md hover:bg-cyan-700'
      >
        {questionIndex === data.length - 1 ? "View Score" : "Next"}
      </button>
    </div>
  );
};

export { QuestionsPage };
