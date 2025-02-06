import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  
  const addValue = () => {
    counter = counter + 1
    if (counter <= 20) {
      setCounter(counter)
    }
  }

  const removeValue = function() {
    counter = counter - 1;
    if (counter >= 0) {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Learn React | Dev BJ</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
