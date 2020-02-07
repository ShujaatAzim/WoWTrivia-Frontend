import React, { useState, useEffect } from 'react'
import Creatable from 'react-select/creatable'

const AddQuestionForm = props => {

  const [questionText, setQuestionText] = useState("")
  const [answerText, setAnswerText] = useState("")
  const [difficultyText, setDifficultyText] = useState("Easy")
  const [options, setOptions] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    const createCategories = () => {
      let values = []
      props.categories.map(category => {
        return values.push({value: category.name, label: category.name})
      })
      setOptions(values)
    }
    createCategories()
  }, [props.categories])

  const submitQuestion = event => {
    event.preventDefault()
    let newerCategories = selectedCategories.map(category => {return { name: category.value} })
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
    .then(console.log(newQuestion))
    .then(() => props.getQuestions())
  }

  const handleCategories = selectedOption => {
    setSelectedCategories(selectedOption)
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
          <label>Categories:</label>
          <Creatable isMulti options={options} onChange={handleCategories} />
          <input type="submit" />
        </form>
      </div>
      <button onClick={() => props.setAddingQuestion(false)}>Cancel</button>
    </div>
  )
}

export default AddQuestionForm