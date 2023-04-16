import "./AdminQuizs.css";
import React, { useContext } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useDeleteQuizMutation } from "../../services/quizAPI";
import { SatateContext } from "../../context";

function AdminQuizs({ id, question, variant, answers, index }) {
  const [deleteQuiz] = useDeleteQuizMutation();
  const { setAlertText } = useContext(SatateContext);
  return (
    <div className="adminQuizs">
      <div className="text">
        <div>{`${index + 1}. ${question}`}</div>
        {variant.map((element, index) => (
          <span key={index}>{`${element} ${answers && answers[index]} `}</span>
        ))}
      </div>
      <div className="buttons">
        <BsPencil className="editBtn" onClick={() => alert(id)} />
        <BsTrash
          className="deleteBtn"
          onClick={() => {
            deleteQuiz(id);
            setAlertText(`Number: ${index + 1} question deleted`);
          }}
        />
      </div>
    </div>
  );
}

export default AdminQuizs;
