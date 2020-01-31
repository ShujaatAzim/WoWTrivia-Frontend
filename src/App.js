import React, { useState, useEffect } from 'react';
import QuestionContainer from './ContainerComponents/QuestionsContainer'
import './Styles/App.css'

function App() {

  const [allQuestions, setAllQuestions] = useState([])
  const [unansweredQuestions, setUnansweredQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState({text: ""})
  const [questionNumber, setQuestionNumber] = useState(0)
  const [generated, setGenerated] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => {setAllQuestions(data);setUnansweredQuestions(data);})
  }, [])

  const randomQuestionGen = () => {
    let somthing = []
    let questionBank = [...unansweredQuestions]
    let randomIndex = Math.floor(Math.random() * (questionBank.length))
    if (unansweredQuestions.length !== 0) {
      setRandomQuestion(questionBank[randomIndex])
      let remainingQuestions = questionBank.filter(question => questionBank.indexOf(question) !== randomIndex)
      setUnansweredQuestions(remainingQuestions)
      setQuestionNumber(questionNumber + 1)
    } else {
      setGenerated(false)
    }
  }

  const handleClick = () => {
    setGenerated(!generated)
    randomQuestionGen()
  }
 
  return (
    <div className="center">
      <h1>WoW Trivia</h1>
      
      { !generated ? <button onClick={handleClick}>Start</button> : null }
      { generated ? <QuestionContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} 
        randomQuestionGen={randomQuestionGen} randomQuestion={randomQuestion} allQuestions={allQuestions} /> : null }  
    </div>
  );
}

export default App;
