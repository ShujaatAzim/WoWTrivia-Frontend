import React, { useState } from 'react'

const AddQuestionForm = props => {

  const [questionText, setQuestionText] = useState("")
  const [answerText, setAnswerText] = useState("")
  const [difficultyText, setDifficultyText] = useState("")

  const submitQuestion = event => {
    event.preventDefault()
    let newQuestion = {"text": questionText, "answer": answerText, "difficulty": difficultyText}
    fetch('http://localhost:3000/questions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application.json"
      },
      body: JSON.stringify(newQuestion)
    })
    .then(props.setAddingQuestion(false))
  }

  return (
    <div>
      <h3>Add a Question</h3>
      <div>
        <form onSubmit={submitQuestion}>
          <label>Question Text:</label>
          <input type="text" value={questionText} onChange={e => setQuestionText(e.target.value)} />
          <label>Answer:</label>
          <input type="text" value={answerText} onChange={e => setAnswerText(e.target.value)} />
          <label>Difficulty:</label>
          <input type="text" value={difficultyText} onChange={e => setDifficultyText(e.target.value)} />
          <input type="submit" />
        </form>
      </div>
      <button onClick={() => props.setAddingQuestion(false)}>Cancel</button>
    </div>
  )
}

export default AddQuestionForm