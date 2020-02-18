import React from 'react';
import './Styles/App.css'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    startGame: state.startGame,
    addingQuestion: state.addingQuestion,
    endGame: state.endGame
  }
}

const App = state => {

  const startGame = () => {
    state.dispatch({ type: "START_GAME", payload: true })
    console.log(state)
  }

  const addingQuestion = () => {
    state.addingQuestion()
    console.log(state)
  }

  const endGame = () => {
    state.endGame(state)
    console.log()
  }

  return (
    <div>
      <h1>WoW Trivia</h1>
      <button onClick={startGame}>Start</button>
      <button onClick={addingQuestion}>Add a Question</button>
      <button onClick={endGame}>End</button>
    </div>
  );
}

export default connect(mapStateToProps)(App);
