import React, { useState, useEffect } from 'react';
import QuestionContainer from './ContainerComponents/QuestionsContainer'
import AddQuestionForm from './Components/AddQuestionForm'
import './Styles/App.css'

function App() {

  const [allQuestions, setAllQuestions] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [unansweredQuestions, setUnansweredQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState({text: ""})
  const [questionNumber, setQuestionNumber] = useState(0)
  const [generated, setGenerated] = useState(false)
  const [addingQuestion, setAddingQuestion] = useState(false)
  const [lastFiveScores, setLastFiveScores] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => {setAllQuestions(data);setUnansweredQuestions(data);})

    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(moreData => setAllCategories(moreData))
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
      let newScores = [...lastFiveScores]
      newScores.push(score + 1)
      setLastFiveScores(newScores)
      setQuestionNumber(0)
      setScore(0)
      setGenerated(false)
      setAllQuestions([])
      getQuestions()
    }
  }

  const getQuestions = () => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => {setAllQuestions(data);setUnansweredQuestions(data);})
  }

  const handleClick = () => {
    setGenerated(!generated)
    randomQuestionGen()
  }
 
  return (
    <div className="whole">
      <h1>WoW Trivia</h1>
      <div>
        { !generated && !addingQuestion ? <button onClick={handleClick}>Start</button> : null }
        { generated ? <QuestionContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} 
          randomQuestionGen={randomQuestionGen} randomQuestion={randomQuestion} allQuestions={allQuestions} 
          score={score} setScore={setScore}/> : null }  
      </div>
      <br />
      <div>
        { !addingQuestion && !generated ? <button onClick={() => setAddingQuestion(true)}>Add a Question</button> : null }
        { addingQuestion ? <AddQuestionForm getQuestions={getQuestions} categories={allCategories} setAddingQuestion={setAddingQuestion} /> : null }
      </div>
      <div>
          Latest Scores:
          <ol>
            {lastFiveScores.map(s => <li>{s}</li>)}
          </ol>
        </div>
    </div>
  );
}

export default App;
