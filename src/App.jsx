import React, { useState } from 'react';
import { PostComponent } from './post';

function App() {
  // const [count, setCount] = useState(0)
  const [Post, setPost] = useState([]); //Defining a new state variable
  //When the value of a state variable changes, the component that uses the state variables re-render. 

  const postComponent = Post.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPost([...Post, {
      name: "harkirat",
      subtitle: "11000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  //setIsVisible updates the state
  return <div style={{ background: "#dfe6e9", height: "100vh", }}>
    <button onClick={addPost}>Add post</button>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {postComponent}
      </div>
    </div>
  </div>

}

export default App