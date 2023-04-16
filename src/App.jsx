import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Exam from "./pages/Exam/Exam";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import { SatateContext } from "./context";

function App() {
  const [alertText, setAlertText] = useState("");
  const [answerCounter, setAnswerCounter] = useState(0);
  const [answerWrong, setAnswerWrong] = useState(0);
  const [givenAnswer, setGivenAnswer] = useState("");
  const states = {
    alertText,
    setAlertText,
    answerCounter,
    setAnswerCounter,
    answerWrong,
    setAnswerWrong,
    givenAnswer,
    setGivenAnswer,
  };
  return (
    <SatateContext.Provider value={{ ...states }}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </SatateContext.Provider>
  );
}

export default App;
