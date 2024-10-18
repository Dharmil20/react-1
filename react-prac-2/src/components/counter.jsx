import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(count + 1);
    }
    function handleDecrese(){
        setCount(count - 1);
    }
    function handleReset(){
        setCount(0);
    }


    return(
        <>
        <h1>Count {count}</h1>
        <button onClick={handleIncrease}>Increse</button>
        <button onClick={handleDecrese}>Decrese</button>
        <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default Counter;