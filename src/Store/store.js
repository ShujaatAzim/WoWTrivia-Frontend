import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  startGame: false,
  endGame: false,
  addingQuestion: false
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "START_GAME":
      return {
        startGame: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())

export default store
