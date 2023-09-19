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
            <div>{ques.question}</div>
            <div>
              <div>{ques.options.option1}</div>
              <div>{ques.options.option2}</div>
              <div>{ques.options.option3}</div>
              <div>{ques.options.option4}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { JsPage };
