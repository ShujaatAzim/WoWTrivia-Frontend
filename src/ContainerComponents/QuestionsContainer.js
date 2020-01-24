import React, { useState } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [generated, setGenerated] = useState(false)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  const handleClick = () => {
    setGenerated(!generated)
    props.randomQuestionGen()
  }
 
  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={handleClick}>{ generated ? "End" : "Start" }</button>
      { generated ? 
        <div>
          <Question question={props.randomQuestion} randomQuestionGen={props.randomQuestionGen} score={score} setScore={setScore} 
            setCorrect={setCorrect} setIncorrect={setIncorrect}/>
        </div> : null
      }
      <br />
      {correct ? "Correct!" : incorrect ? "Incorrect!" : null }
    </div>
  )
}

export default QuestionContainer