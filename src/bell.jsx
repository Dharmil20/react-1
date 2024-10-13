import React, { useState } from 'react';

export function NotificationBell() {
    let [notiCount, setNotiCount] = useState(0);

    function updateNoti() {
        setNotiCount(notiCount + 1)
    }

    return (
        <div>
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
                style={{ width:"50px",height: "50px",cursor: "pointer", marginLeft: 60 }} // Adjust margin to avoid overlap with the notification circle
                onClick={updateNoti}
                src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-bell-icon-png-image_927119.jpg"
                alt=""
            />
        </div>
    );
}
