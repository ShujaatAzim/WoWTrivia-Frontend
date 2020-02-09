import React, { useState, useEffect } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
 
  useEffect(() => {
    return () => {
      props.setLastFiveScores(score)
    }
  }, [])

  return (
    <div>
      <p>Score: {score}</p>
      <p>Question #{props.questionNumber}</p>
        <div>
          <Question question={props.randomQuestion} randomQuestionGen={props.randomQuestionGen} score={score} 
            setScore={setScore} setCorrect={setCorrect} setIncorrect={setIncorrect} />
        </div>
      <br />
      {correct ? "Correct!" : incorrect ? "Incorrect!" : null }
    </div>
  )
}

export default QuestionContainer