import React from "react";
import { JsData } from "../data/JsData";
import { useState } from "react";
import "./JsPage.css";

const JsPage = () => {
  const [jsData, setJsData] = useState(JsData);
  return (
    <div className='wrapper'>
      {jsData.map((ques, index) => {
        return (
          <div className='quesBackground'>
            <div>
              {ques.id}. {ques.question}
            </div>
            <div className='inputWrapper'>
              <label>
                <input type='radio' />
                {ques.options.option1}
              </label>
              <label>
                <input type='radio' />
                {ques.options.option2}
              </label>

              <label>
                <input type='radio' />
                {ques.options.option3}
              </label>

              <label>
                <input type='radio' />
                {ques.options.option4}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { JsPage };
