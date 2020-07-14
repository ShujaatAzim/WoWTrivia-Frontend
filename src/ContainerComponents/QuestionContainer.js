import React, { useState, useEffect } from 'react'

const QuestionContainer = () => {

  [allQuestions, setAllQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => setAllQuestions(data))
  },[])

  return (
    <div>
      Questions Container
    </div>
  )
}

export default QuestionContainer