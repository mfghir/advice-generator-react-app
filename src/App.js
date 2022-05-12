import "./App.css";
import React, { useState, useEffect } from "react";
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
        <h2>{advice}</h2>
        <button className="btn" onClick={() => fetchAdvice()}>
          Give Me an Advice!
        </button>
      </div>
    </div>
  );
};

export default App;
