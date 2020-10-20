import React, { useState } from 'react'

const Question = props => {

  const { answeredQuestions, setAnsweredQuestions, question } = props
 
  const [answer, setAnswer] = useState("")

  const handleSubmit = e => {
    let q = question
    let all = answeredQuestions
    e.preventDefault()
    console.log(answer)
    all.push(q)
    setAnsweredQuestions(all)
    console.log(answeredQuestions)
  }

  return (
    <div>
      <h3>{question.text}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  )
}

export default Question