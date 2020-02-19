import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  startGame: false,
  addingQuestion: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "START_GAME":
      return Object.assign({}, state, {
        startGame: action.payload
      })
    case "ADDING_QUESTION":
      return Object.assign({}, state, {
        addingQuestion: action.payload
      })
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
console.log(store.getState())

export default store
