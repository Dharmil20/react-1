
function App() {
  // const [count, setCount] = useState(0)
  return (
    <div style={{background: "gray", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
      <PostComponent />
      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor: "White", borderRadius: 10, borderWidth: 1, padding: 20}

function PostComponent() {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} alt="DP" style={{ width: 50, height: 50, borderRadius: 20 }} />
      <div style={{marginLeft: 10}}>
        <b>100xdevs</b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
    </div>
    <h1>Welcome to 100xDevs </h1>
  </div>
}

export default App
