import { useState } from 'react'
import Counter from './components/counter'
import Timer from './components/timer'
import Timer2 from './components/timer2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter />
    <Timer></Timer>
    <Timer2></Timer2>
    </>
  )
}

export default App
