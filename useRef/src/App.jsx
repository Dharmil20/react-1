import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Signup />
      <Clock />
    </>
  )
}

function Clock() {
  const [currCount, setCurrCount] = useState(0);
  const timerRef = useRef();

function handleStart() {
    const interval = setInterval(() => {
      setCurrCount(prevCount => prevCount + 1);
    }, 1000);

    timerRef.current = interval;
  }

  function handleStop(){
    clearInterval(timerRef.current);
  }

  return (
    <div>
      {currCount}
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

function Signup() {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (<>
    Sign Up
    <input ref={inputRef} type="text" />
    <input type="text" />
    <button onClick={handleFocus}>Submit</button>
  </>
  )
}

export default App
