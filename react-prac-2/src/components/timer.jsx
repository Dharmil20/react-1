//mounting, un-mounting, re-rendering => These are life cycle events
//Whenever you want to run functions on mounting, un-mounting, re-rendering of a component you use useEffect hook.

import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(59);
    const [mins, setMins] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevseconds) => {
                    if (prevseconds === 0) {
                        if (mins > 0) {
                            setMins((prevMins) => prevMins - 1);
                            return (59);
                        } else {
                            clearInterval(interval);
                            return (0);
                        }
                    } else {
                        return (prevseconds - 1);
                    }
                }
                )
            }, 1000)
        } else {
            clearInterval(interval)
        }

        // Cleanup function to clear interval when component unmounts or `isRunning` changes
        return () => clearInterval(interval);
    }, [isRunning])

    return (
        <>
            {
                mins > 0 || seconds > 0 ? (
                    <h1>{`${mins}:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
                ) : (
                    <h1>Time's up!</h1>
                )
            }
            {!isRunning ? (<button onClick={() => { setIsRunning(!isRunning) }}>Start</button>) : (<button onClick={() => { setIsRunning(!isRunning) }}>Stop</button>)}


        </>
    );
}

export default Timer;