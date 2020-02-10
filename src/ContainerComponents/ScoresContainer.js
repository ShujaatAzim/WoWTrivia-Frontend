import React from 'react'

const ScoresContainer = props => {

  return(
    <div>
      Scores: 
      <div>
        {props.lastFiveScores.map(score => <p>{score}</p>)}
      </div>
    </div>
  )
}

export default ScoresContainer