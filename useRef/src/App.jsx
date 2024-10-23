import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.focus();
  }
  return (
    <>
      Sign Up
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={handleFocus}>Submit</button>
    </>
  )
}

export default App
