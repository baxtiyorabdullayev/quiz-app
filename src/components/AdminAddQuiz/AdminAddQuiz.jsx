import "./AdminAddQuiz.css";
import React, { useState, useContext } from "react";
import { useAddQuizMutation } from "../../services/quizAPI";
import { SatateContext } from "../../context";
function AdminAddQuiz() {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answerRight, setAnswerRight] = useState("");
  const [addQuiz] = useAddQuizMutation();
  const { setAlertText } = useContext(SatateContext);

  const addQuestionBtn = (e) => {
    e.preventDefault();
    const answers = [answer1, answer2, answer3, answer4];
    const readyQuestion = {
      question,
      variant: ["A)", "B)", "C)", "D)"],
      answers,
      rightAnswer: answerRight,
    };
    addQuiz(readyQuestion);
    setAlertText("Added new question!");
    setQuestion("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setAnswerRight("");
  };
  return (
    <div>
      <form>
        <input
          value={question}
          type="text"
          placeholder="Write question..."
          className="question"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="answers">
          <input
            value={answer1}
            type="text"
            placeholder="Write firts variant..."
            className="wrong"
            onChange={(e) => setAnswer1(e.target.value)}
          />
          <input
            value={answer2}
            type="text"
            placeholder="Write second variant..."
            className="wrong"
            onChange={(e) => setAnswer2(e.target.value)}
          />
          <input
            value={answer3}
            type="text"
            placeholder="Write third variant..."
            className="wrong"
            onChange={(e) => setAnswer3(e.target.value)}
          />
          <input
            value={answer4}
            type="text"
            placeholder="Write fourth variant..."
            className="wrong"
            onChange={(e) => setAnswer4(e.target.value)}
          />
          <input
            value={answerRight}
            type="text"
            placeholder="Write right variant..."
            className="right"
            onChange={(e) => setAnswerRight(e.target.value)}
          />

          <button className="addQuestionBtn" onClick={addQuestionBtn}>
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddQuiz;
