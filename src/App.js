import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    // console.log("useEffect");
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        console.log(advice);

        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="btn" onClick={() => fetchAdvice()}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
