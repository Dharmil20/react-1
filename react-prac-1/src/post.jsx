const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

export function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}> 
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {(time !== undefined) ? <div style={{display: 'flex'}}>
          <div>{time}</div>      
          <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{width: 12, height: 12}} />
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}}>
     {description}
    </div>
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