import { useState } from 'react'
import Counter from './components/counter'
import Timer from './components/timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter />
    <Timer></Timer>
    </>
  )
}

export default App
