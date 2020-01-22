import React, { useState } from 'react'

const Question = props => {

  const [answer, setAnswer] = useState("")
  const [questionAnswer] = useState(props.question.answer)

  const handleCorrect = () => {
    props.setScore(props.score + 1)
    props.setCorrect(true)
  }

  const handleIncorrect = () => {
    props.setScore(props.score - 1)
    props.setIncorrect(true)
  }
 
  const handleSubmit = e => {
    e.preventDefault()
    questionAnswer.toLowerCase() === answer.toLowerCase() ? handleCorrect() : handleIncorrect()
    console.log(questionAnswer.toLowerCase())
    console.log(answer.toLowerCase())
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