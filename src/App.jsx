import { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(null)

  function generateNumber() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="container">
      <div className="card">
        <h1>🎲 Random Number Generator</h1>

      <p className="subtitle">
        Click below to generate your lucky number!
      </p>

      <div className="number-display">
        {randomNumber === null
          ? '???'
          : randomNumber}
      </div>

      <p className="message">
        {randomNumber === null
          ? 'No number generated yet'
          : 'Your random number is ready!'}
      </p>

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  </div>
  )
}

export default App