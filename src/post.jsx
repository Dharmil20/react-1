const style = { width: 200, backgroundColor: "White", borderRadius: 10, borderWidth: 1, padding: 20 }

export function PostComponent() {
    return <div style={style}>
        <div style={{ display: "flex" }}>
            <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} alt="DP" style={{ width: 50, height: 50, borderRadius: 20 }} />
            <div style={{ marginLeft: 10 }}>
                <b>100xdevs</b>
                <div>23,888 followers</div>
                <div>12m</div>
            </div>
        </div>
        <h1>Welcome to 100xDevs </h1>
    </div>
}

export function ProfileComponent({ name, pViewers, pImpressions, workingTech }) {
    return <div style={style}>
        <div style={{ backgroundColor: "red", width: 200, height: 65, position: "absolute" }}></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", paddingTop: "4vh", borderBottom: "2px solid #ddd", }}>
            <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} alt="DP" style={{ width: 65, height: 65, borderRadius: 20 }} />
            <br />
            <b>{name}</b>
            <p>Working with {workingTech}</p>
        </div>

        <br />
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p>Profile Viewers</p>
                </div>
                <div>
                    <p style={{ color: "Blue" }}>{pViewers}</p>
                </div>
            </div>
            {/* Conditional Rendering  */}
            {pImpressions !== undefined && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p>Post Impressions</p>
                </div>
                <div>
                    <p style={{ color: "Blue" }}>{pImpressions}</p>
                </div>
            </div>}
        </div>
    </div>
}