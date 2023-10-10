import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuesIndex, setScore } from "../redux/quizSlice";

const ScorePage = () => {
  const { score } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className='wrapper'>
        <div className='text-2xl font-semibold'>Score Page</div>
        {/* <div className='quesBackground'> */}
        <div className='text-2xl font-semibold'>Your Score is {score} / 5</div>
        <button
          className=' bg-cyan-900 text-white shadow-lg shadow-gray-400/50 px-3 py-0.5 rounded-md hover:bg-cyan-700'
          onClick={() => {
            navigate("/");
            dispatch(setQuesIndex());
            dispatch(setScore(true));
          }}
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export { ScorePage };
