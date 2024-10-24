import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <LightBulb />
    </>
  )
}

function LightBulb(){
  const [bulb, setBulb] = useState(true);

  return(<>
    <Bulb bulb={bulb}/> <br />
    <ToggleBulb setBulb={setBulb}/>
  </>)
}

function Bulb({bulb}){
  return(<>
    {bulb ? "Bulb On" : "Bulb Off"}
  </>)
}

function ToggleBulb({setBulb}){
  function handleBulb(){
    setBulb(currState => !currState);
  }

  return(<>
    <button onClick={handleBulb}>Toggle</button>
  </>)
}

export default App
