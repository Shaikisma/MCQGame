import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from './questions';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState(Array(questions.length).fill(null));

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevButtonClick = () => {
    const prevQuestion = currentQuestionIndex - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestionIndex(prevQuestion);
    }
  };
  const setSelectedAnswerIndex = (index) => {
    const newSelectedAnswerIndexes = [...selectedAnswerIndexes];
    newSelectedAnswerIndexes[currentQuestionIndex] = index;
    setSelectedAnswerIndexes(newSelectedAnswerIndexes);
  };
  return (
    <div className='app_main'>
    <div className='app'>
      <nav className='navbar'>
        <h2>MCQ Game App</h2>
      </nav>
    <div className='container'>
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          index= {currentQuestionIndex}
          handleAnswerOptionClick={handleAnswerOptionClick}
          selectedAnswerIndex={selectedAnswerIndexes[currentQuestionIndex]}
            setSelectedAnswerIndex={setSelectedAnswerIndex}
        />
      )}
       {!showScore&&(<div className="navigation-buttons">
            <button
              className="btn btn-secondary"
              onClick={handlePrevButtonClick}
              disabled={currentQuestionIndex === 0}
            >
            	&#8592;  Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextButtonClick}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next	&#8594;
            </button>
          </div>)}
      </div>
    </div>
    <footer className='foot'>
    <span className='info'>	&#169; 09 July 2024 | Akshat Pratap Singh</span>
  </footer>
  </div>
  );
}

export default App;