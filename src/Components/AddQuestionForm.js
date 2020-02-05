import React, { useState, useEffect } from 'react'
import Category from '../Components/Category'

const AddQuestionForm = props => {

  const [questionText, setQuestionText] = useState("")
  const [answerText, setAnswerText] = useState("")
  const [difficultyText, setDifficultyText] = useState("")
  const [categories, setCategories] = useState([])

  let newCategories = []

  useEffect(() => {
    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(data => setCategories(data))
  }, [])

  const submitQuestion = event => {
    event.preventDefault()
    let newerCategories = newCategories.filter(category => category !== "")
    let newQuestion = {"text": questionText, "answer": answerText, "difficulty": difficultyText, "categories": newerCategories}
    fetch('http://localhost:3000/questions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application.json"
      },
      body: JSON.stringify(newQuestion)
    })
    .then(props.setAddingQuestion(false))
    .then(console.log(newCategories))
    .then(console.log(newerCategories))
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
          <select value={difficultyText} onChange={e => setDifficultyText(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select multiple value={newCategories} onChange={e => newCategories.push(e.target.value)}>
            {categories.map(category => <Category key={category.id} category={category} />)}
          </select>
          <input type="submit" />
        </form>
      </div>
      <button onClick={() => props.setAddingQuestion(false)}>Cancel</button>
    </div>
  )
}

export default AddQuestionForm