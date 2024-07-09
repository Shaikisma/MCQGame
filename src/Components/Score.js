import React from 'react';
import './Score.css';

function Score({ score, totalQuestions }) {
  return (
    <div className="score-container">
      <div className="score-text">
        You scored {score} out of {totalQuestions}
      </div>
      <button className="restart-button" onClick={() => window.location.reload()}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Score;
