import React, { useState } from 'react'

const Question = props => {

  const [answer, setAnswer] = useState("")
  const [questionAnswer] = useState(props.question.answer)

  const handleSubmit = e => {
    e.preventDefault()
    questionAnswer.toLowerCase() === answer.toLowerCase() ? console.log("correct") : console.log("incorrect")
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