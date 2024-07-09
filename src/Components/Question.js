import React from 'react';
import './Question.css';

function Question({ question,index, handleAnswerOptionClick, selectedAnswerIndex, setSelectedAnswerIndex }) {

  const handleOptionClick = (isCorrect, index) => {
    setSelectedAnswerIndex(index);
    setTimeout(() => {
      handleAnswerOptionClick(isCorrect);
    }, 500);
  };

  return (
    <div className="question-container">
      <div className="question-text">Q{index+1}. {question.questionText}</div>
      <div className="answer-section">
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            className={`answer-button ${selectedAnswerIndex === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(answerOption.isCorrect, index)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;


