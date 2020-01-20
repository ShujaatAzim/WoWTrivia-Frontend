import React, { useState, useEffect } from 'react';
import QuestionContainer from './ContainerComponents/QuestionsContainer'

function App() {

  const [allQuestions, setAllQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState({text: ""})

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(resp => resp.json())
    .then(data => setAllQuestions(data))
  }, [])

  const randomQuestionGen = () => {
    let randomIndex = Math.floor(Math.random() * (allQuestions.length))
    setRandomQuestion(allQuestions[randomIndex])
  }
 
  return (
    <div>
      <h1>WoW Trivia</h1>
      <QuestionContainer randomQuestionGen={randomQuestionGen} randomQuestion={randomQuestion} />
    </div>
  );
}

export default App;
