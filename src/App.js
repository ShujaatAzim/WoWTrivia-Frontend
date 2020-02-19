import React from 'react';
import { connect } from 'react-redux'
import './Styles/App.css'

const App = state => {

  const gameStart = () => {
    state.dispatch({type: "START_GAME", payload: !state.startGame})
  }

  return (
    <div>
      <h1>PSI</h1>
      <button onClick={gameStart}>{state.startGame ? "End" : "Start"}</button>
      <button onClick={null}>Add a Question</button>
      <div>
        <p>{state.startGame ? "Game has started" : "Game hasn't started"}</p>
        <p>{state.addingQuestion ? "We're adding a question" : "We're not adding a question"}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    startGame: state.startGame,
    addingQuestion: state.addingQuestion,
    endGame: state.endGame
  }
}

export default connect(mapStateToProps)(App);
