import React, { useState } from 'react'
import QuestionContainer from './ContainerComponents/QuestionContainer'
import './Styles/App.css'

const App = () => {

  const [game, setGame] = useState(false)

  return (
    <div>
      <h1>WoW Trivia</h1>
      <button onClick={() => setGame(true)}>Start</button>
      <button>Login</button>
      { game ? <QuestionContainer game={game} setGame={setGame} /> : null }
    </div>
  )
}

export default App;
