import { useState, useEffect } from "react";

function Timer2() {
    const [time, setTime] = useState(0); // total time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [editingField, setEditingField] = useState(null); // "hours", "mins", or "seconds"
    const [editValue, setEditValue] = useState(""); // value being edited

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        // Cleanup function to clear interval when component unmounts or `isRunning` changes
        return () => clearInterval(interval);
    }, [isRunning]);

    // Functions to handle editing of time
    const handleEditChange = (e) => {
        const value = e.target.value;
        // Validate to allow empty input or max two digits
        if (value === '' || /^\d{0,2}$/.test(value)) {
            setEditValue(value);
        }
    };

    const applyEdit = () => {
        let newTime = time;

        if (editingField === "hours") {
            const hours = parseInt(editValue) || 0;
            newTime = (hours * 3600) + (Math.floor(time % 3600 / 60) * 60) + (time % 60);
        } else if (editingField === "mins") {
            const mins = parseInt(editValue) || 0;
            newTime = (Math.floor(time / 3600) * 3600) + (mins * 60) + (time % 60);
        } else if (editingField === "seconds") {
            const seconds = parseInt(editValue) || 0;
            newTime = (Math.floor(time / 60) * 60) + seconds;
        }

        setTime(newTime);
        setEditingField(null);
        setEditValue("");
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0); // Reset time to zero
    };

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return {
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds,
        };
    };

    const { hours, minutes, seconds } = formatTime(time);

    return (
        <div>
            {/* <h1>{`${hours}:${minutes}:${seconds}`}</h1> */}

            <h1>
                <span onClick={() => { setEditingField("hours"); setEditValue(hours); }}>{hours}</span>: 
                <span onClick={() => { setEditingField("mins"); setEditValue(minutes); }}>{minutes}</span>: 
                <span onClick={() => { setEditingField("seconds"); setEditValue(seconds); }}>{seconds}</span>
            </h1>

            <button onClick={() => setIsRunning(prev => !prev)}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer}>Reset</button>

            {/* <h2>Edit Time</h2> */}
            {editingField && (
                <div>
                    <input
                        type="number"
                        value={editValue}
                        onChange={handleEditChange}
                        placeholder="Edit"
                    />
                    <button onClick={applyEdit}>Apply</button>
                </div>
            )}
        </div>
    );
}

export default Timer2;
