import React, { useState, useEffect } from 'react'
import Question from '../Components/Question'

const QuestionContainer = props => {

  const [allQuestions, setAllQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  useEffect(() => {
    let num = Math.floor((Math.random() * 8) + 1)
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => {setAllQuestions(data);setCurrentQuestion(data[num])})
  }, [])

  return (
    <div>
      <h2>Questions go under here</h2>
      { currentQuestion && answeredQuestions.length < 3 ? 
        <Question 
          question={currentQuestion} 
          allQuestions={allQuestions} 
          answeredQuestions={answeredQuestions} 
          setAnsweredQuestions={setAnsweredQuestions} 
          /> 
        : null }
    </div>
  )
}

export default QuestionContainer