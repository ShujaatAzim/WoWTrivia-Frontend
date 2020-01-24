import React, { useState } from 'react'

const Question = props => {

  const [answer, setAnswer] = useState("")

  const handleAnswer = validation => {
    if (validation === "correct") { 
    props.setScore(props.score + 1)
    props.setCorrect(true)
      setTimeout(() => {
        props.setCorrect(false)
        setAnswer("")
        props.randomQuestionGen()
      }, 2000) 
    } else { 
    props.setIncorrect(true)
      setTimeout(() => {
        props.setIncorrect(false)
        setAnswer("")
        props.randomQuestionGen()
      }, 2000)
    }
  }
 
  const handleSubmit = e => {
    e.preventDefault()
    let questionAnswer = props.question.answer
    questionAnswer.toLowerCase() === answer.toLowerCase() ? handleAnswer("correct") : handleAnswer("incorrect")
  }
 
  return (
    <div>
      <p>{props.question.text}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Answer:</label>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Question