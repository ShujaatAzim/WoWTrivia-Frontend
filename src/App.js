import React, { useState, useEffect } from 'react';
import QuestionContainer from './ContainerComponents/QuestionsContainer'
import AddQuestionForm from './Components/AddQuestionForm'
import './Styles/App.css'
import ScoresContainer from './ContainerComponents/ScoresContainer';
import { connect } from 'react-redux'
import {increment, decrement, reset } from './actions'

//testing redux
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

//end redux

const App = props => {

  // testing redux

  const increment = () => {
    props.increment()
  }

  const decrement = () => {
    props.decrement()
  }

  const reset = () => {
    props.reset()
  }

  //end redux

  const [allQuestions, setAllQuestions] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [unansweredQuestions, setUnansweredQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState({text: ""})
  const [questionNumber, setQuestionNumber] = useState(0)
  const [generated, setGenerated] = useState(false)
  const [addingQuestion, setAddingQuestion] = useState(false)
  const [lastFiveScores, setLastFiveScores] = useState([])
  const [score, setScore] = useState(0)
  const [showingScore, setShowingScore] = useState(false)

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
      newScores.unshift(score + 1)
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
      {/* Testing Redux here */}
      <hr />
      <h6>Testing Redux</h6>
      <p>{props.count}</p>
      <button onClick={increment}>Add</button><button onClick={decrement}>Subtract</button><button onClick={reset}>Reset</button>
      <hr /><br /><br />
      {/* End redux Test */}
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
      <br />
      <div>
        { !addingQuestion && !generated ? <button onClick={() => setShowingScore(!showingScore)}>
          { showingScore ? "Hide Scores" : "Show Scores" }</button> : null }
        { showingScore ? <div><br /><ScoresContainer lastFiveScores={lastFiveScores}/></div> : null }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
