import { useState } from 'react'
import './App.css'
import { createContext } from 'react';
import { useContext } from 'react';

const BulbContext = createContext(); //Step 1: Create Context

function App() {
  const [bulb, setBulb] = useState(true);
  return (
    <>
      <BulbContext.Provider value={{ bulb, setBulb }}> {/*Step 2: Provide Context to Parent component */}
        <LightBulb />
      </BulbContext.Provider>
    </>
  )
}

function LightBulb() {

  return (<>
    <Bulb/> <br />
    <ToggleBulb />
  </>)
}

function Bulb() {
  const { bulb } = useContext(BulbContext) //Step 3: Consume The context
  return (<>
    {bulb ? "Bulb On" : "Bulb Off"}
  </>)
}

function ToggleBulb() {
  const { setBulb } = useContext(BulbContext)
  function handleBulb() {
    setBulb(currState => !currState);
  }

  return (<>
    <button onClick={handleBulb}>Toggle</button>
  </>)
}

export default App
