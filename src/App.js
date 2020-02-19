import React from 'react';
import { connect } from 'react-redux'
import AddQuestionForm from './Components/AddQuestionForm'
import ScoresContainer from './ContainerComponents/ScoresContainer'
import './Styles/App.css'

const App = state => {

  const gameStart = () => {
    state.dispatch({type: "START_GAME", payload: !state.startGame})
  }

  const addQuestion = () => {
    state.dispatch({type: "ADDING_QUESTION", payload: !state.addingQuestion})
  }

  return (
    <div>
      <h1>PSI</h1>
      <button onClick={gameStart}>{state.startGame ? "End" : "Start"}</button>
      {state.startGame ? null : <button onClick={addQuestion}>Add a Question</button>}
      <div>
        <p>{state.startGame ? "Game has started" : "Game hasn't started"}</p>
        <p>{state.addingQuestion ? "We're adding a question" : "We're not adding a question"}</p>
      </div>
      {state.addingQuestion ? 
        <div>
          <AddQuestionForm />
        </div> 
      : state.startGame ? 
        <div>
          <ScoresContainer />
        </div> 
      : null }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    startGame: state.startGame,
    addingQuestion: state.addingQuestion
  }
}

export default connect(mapStateToProps)(App);
