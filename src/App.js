import React from 'react';

function App() {

  const get = e => {
    let name = e.target.name
    fetch(`http://localhost:3000/${name}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>WoW Trivia!</h1>
      <button onClick={get} name={"questions"}>Questions</button>
      <button onClick={get} name={"categories"}>Categories</button>
    </div>
  );
}

export default App;
