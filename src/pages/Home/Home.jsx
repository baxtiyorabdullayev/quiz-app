import "./Home.css";
import React, { useContext } from "react";
import { SatateContext } from "../../context";

function Home() {
  const { answerCounter, answerWrong } = useContext(SatateContext);
  return (
    <div className="home">
      <h1>Correct answers: {answerCounter}</h1>
      <h1>Wrong answers: {answerWrong}</h1>
    </div>
  );
}

export default Home;
