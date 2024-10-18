import React, { useEffect, useState } from 'react';

export function NotificationBell() {
    const [notiCount, setNotiCount] = useState(100);
    const [tab, setTab] = useState(1);
    const [tabData, setTabData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotiCount(prev => prev + 1);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    useEffect(() => {
        setLoading(true);
        async function fetchData(){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + tab)
        const json = await res.json();
        setTabData(json.title);
        setLoading(false);
        }
        fetchData();
    }, [tab])


    return (
        <div>
            <div>
                <button onClick={() => setTab(1)} style={{ color: (tab == 1) ? "red" : "black" }}>Todo 1</button>
                <button onClick={() => setTab(2)} style={{ color: (tab == 2) ? "red" : "black" }}>Todo 2</button>
                <button onClick={() => setTab(3)} style={{ color: (tab == 3) ? "red" : "black" }}>Todo 3</button>
                <button onClick={() => setTab(4)} style={{ color: (tab == 4) ? "red" : "black" }}>Todo 4</button>
            </div>
            {loading ? "Loading....." : tabData}
            <div
                style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: 25,
                    height: 25,
                    position: "absolute",
                    left: "165px",
                    top: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white", // Make the text visible over the red background
                    fontWeight: "bold", // Bold text for better visibility
                }}
            >
                {notiCount}
            </div>
            <img
                style={{ width: "50px", height: "50px", cursor: "pointer", marginLeft: 60 }} // Adjust margin to avoid overlap with the notification circle
                src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-bell-icon-png-image_927119.jpg"
                alt=""
            />
        </div>
    );
}
