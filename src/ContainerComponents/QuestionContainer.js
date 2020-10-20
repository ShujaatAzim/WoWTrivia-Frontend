import React, { useState, useEffect } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [allQuestions, setAllQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => setAllQuestions(data))
  },[])

  // const getRandomQuestion = (min, max) => {
  //   min = 0
  //   max = allQuestions.length - 1
  //   console.log(Math.floor(Math.random() * (max - min) + min))
  // }

  return (
    <div>
      <h2>Questions go under here</h2>
      <Question />
    </div>
  )
}

export default QuestionContainer