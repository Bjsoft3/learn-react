import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1, 2, 3]
  let myObj = {name: "Bhagirath", dist: "rajasthan"}

  return (
    <>
      <Card tagline="Dev BJ Learning" arrVal={myArr} objVal={myObj} officeCount="15" />
      <Card/>
    </>
  )
}

export default App
