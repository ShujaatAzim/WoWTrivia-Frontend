import React, { useState } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  const {score, setScore} = props

  return (
    <div>
      <p>Score: {props.score}</p>
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