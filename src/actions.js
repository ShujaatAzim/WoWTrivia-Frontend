export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

export const increment = () => {
  return { type: INCREMENT }
}

export const decrement = () => {
  return { type: DECREMENT }
}

export const reset = () => {
  return { type: RESET }
}

// this file basically just lists actions, but it's good to "abstract" the actions, even though they're just plain strings, to prevent typo erros