import React, { useState, useEffect } from 'react';
import QuestionContainer from './ContainerComponents/QuestionsContainer'
import AddQuestionForm from './Components/AddQuestionForm'
import './Styles/App.css'

function App() {

  const [allQuestions, setAllQuestions] = useState([])
  const [unansweredQuestions, setUnansweredQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState({text: ""})
  const [questionNumber, setQuestionNumber] = useState(0)
  const [generated, setGenerated] = useState(false)
  const [addingQuestion, setAddingQuestion] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => {setAllQuestions(data);setUnansweredQuestions(data);})
  }, [])

  const randomQuestionGen = () => {
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
      <div>
        { !generated && !addingQuestion ? <button onClick={handleClick}>Start</button> : null }
        { generated ? <QuestionContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} 
          randomQuestionGen={randomQuestionGen} randomQuestion={randomQuestion} allQuestions={allQuestions} /> : null }  
      </div>
      <br />
      <div>
        { !addingQuestion && !generated ? <button onClick={() => setAddingQuestion(true)}>Add a Question</button> : null }
        { addingQuestion ? <AddQuestionForm setAddingQuestion={setAddingQuestion} /> : null }
      </div>
    </div>
  );
}

export default App;
