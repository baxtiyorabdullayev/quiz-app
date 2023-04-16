import "./Admin.css";
import React from "react";

import { useQuizsQuery } from "../../services/quizAPI";
import AdminQuizs from "../../components/AdminQuizs/AdminQuizs";
import AdminAddQuiz from "../../components/AdminAddQuiz/AdminAddQuiz";

function Admin() {
  const { data, error, isLoading, isSuccess } = useQuizsQuery();

  return (
    <div className="admin">
      <div className="showQuestions">
        <form className="searchInput">
          <input type="search" placeholder="search everything..." />
        </form>

        {data?.length > 0 ? (
          data?.map((element, index) => (
            <AdminQuizs key={element.id} {...element} index={index} />
          ))
        ) : (
          <h1>No test here, please create test...</h1>
        )}
      </div>
      <div className="addQuiz">
        <AdminAddQuiz />
      </div>
    </div>
  );
}

export default Admin;
