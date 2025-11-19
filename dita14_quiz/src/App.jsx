import React, { useState } from "react"; 
import "./App.css"; 

const questions = [
  {
    question: "Which car manufacturer created the Quattro all-wheel-drive system that became famous in rally racing?",
    options: ["Audi", "BMW", "Mercedes-Benz", "Volkswagen"],
    answer: "Audi",
  },
  {
    question: "Which brand owns Lamborghini?",
    options: ["Toyota", "Ford","Volkswagen",  "General Motors"],
    answer: "Volkswagen",
  },
  {
    question: "Which company produced the rotary-engine sports car known as the RX-7?",
    options: [ "Toyota", "Honda","Mazda", "Nissan"],
    answer: "Mazda",
  },
  {
    question: "Which luxury brand began as the performance division of Mercedes-Benz before being fully integrated?",
    options: ["Brabus", "Alpina", "Maybach", "AMG"],
    answer: "AMG",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1); 
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-container">
        <h1>Futboll Quiz</h1>
        <h3>Quiz-i ka përfunduar!</h3>
        <p>Shkalla e saktësisë: {score} nga {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Futboll Quiz</h1>
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      </div>
  );
};

export default App;

