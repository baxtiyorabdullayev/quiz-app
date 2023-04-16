import "./Quiz.css";
import React, { useContext } from "react";

import { SatateContext } from "../../context";

function Quiz({ question, variant, answers, rightAnswer, id }) {
  const {
    givenAnswer,
    setGivenAnswer,
    setAlertText,
    answerCounter,
    setAnswerCounter,
    answerWrong,
    setAnswerWrong,
  } = useContext(SatateContext);

  return (
    <div className="quiz">
      <h4>
        {id}. {question}
      </h4>
      {answers.map((element, index) => (
        <label key={index}>
          <input
            type="radio"
            name={id}
            value={element}
            onClick={(e) => setGivenAnswer(e.target.value)}
          />
          {`${variant[index]} ${element}`}
        </label>
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (rightAnswer === givenAnswer) {
            setAnswerCounter(answerCounter + 1);
            setAlertText("Correct!");
          } else {
            setAnswerWrong(answerWrong + 1);
            setAlertText("Wrong!");
          }
        }}
        className="okBtn"
      >
        ok
      </button>
    </div>
  );
}

export default Quiz;
