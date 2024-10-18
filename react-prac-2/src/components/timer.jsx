//mounting, un-mounting, re-rendering => These are life cycle events
//Whenever you want to run functions on mounting, un-mounting, re-rendering of a component you use useEffect hook.

import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [mins, setMins] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevseconds) => {
                    if (prevseconds === 0) {
                        if (mins > 0) {
                            setMins(mins - 1);
                            return 59;
                        } else if (hours > 0) {
                            setHours(hours - 1);
                            setMins(59);
                            return 59;
                        }
                        else {
                            clearInterval(interval);
                            return 0;
                        }
                    } else {
                        return prevseconds - 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        // Cleanup function to clear interval when component unmounts or `isRunning` changes
        return () => clearInterval(interval);
    }, [isRunning, hours, mins]);

    return (
        <>
            {hours > 0 || mins > 0 || seconds > 0 ? (
                <h1>{`${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
            ) : (
                <h1>00:00:00</h1>
            )}
            {!isRunning ? (
                <button onClick={() => { setIsRunning(true) }}>Start</button>
            ) : (
                <button onClick={() => { setIsRunning(false) }}>Stop</button>
            )}
            <button onClick={() => { setIsEditing(true) }}>Edit Timer</button>
            {isEditing && (
                <div>
                    <input
                        type="number"
                        value={hours}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Set value only if it's a valid number with at most 2 digits
                            if (value === '' || /^\d{0,2}$/.test(value) && value <= 59) {
                                setHours(value);
                            }
                        }}
                        placeholder="Hours"
                    />
                    <input
                        type="number"
                        value={mins}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Set value only if it's a valid number with at most 2 digits
                            if (value === '' || /^\d{0,2}$/.test(value) && value <= 59) {
                                setMins(value);
                            }
                        }}
                        placeholder="Minutes"
                    />
                    <input
                        type="number"
                        value={seconds}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Set value only if it's a valid number with at most 2 digits
                            if (value === '' || /^\d{0,2}$/.test(value) && value <= 59) {
                                setSeconds(value);
                            }
                        }}
                        placeholder="Seconds"
                    />
                    <button onClick={() => { setIsEditing(false) }}>Set Timer</button>
                </div>
            )}
        </>
    );
}

export default Timer;
