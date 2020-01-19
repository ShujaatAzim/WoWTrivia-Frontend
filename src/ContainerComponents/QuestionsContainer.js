import React, { useState } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [generated, setGenerated] = useState(false)

  const handleClick = () => {
    setGenerated(true)
    props.randomQuestionGen()
  }
 
  return (
    <div>
      <button onClick={handleClick}>Get Question</button>
      {generated ? <Question question={props.randomQuestion} /> : null}
    </div>
  )
}

export default QuestionContainer