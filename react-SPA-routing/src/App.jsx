// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import './App.css'
import { Class11Program } from "./components/class11program"
import { useEffect } from "react"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return (<div>
    <Link to="/">Allen</Link> | <Link to="/neet/online-coaching-class-11">Class 11</Link> | <Link to="/neet/online-coaching-class-12">Class 12</Link> <br />
    <br />Welcome to Allen
    <Outlet /> {/*Jaha pe bhi Maine Outlet likha hai waha pe children routes ke content display hoonge*/}
    <br /><br />Footer | About Us | Contact Us
  </div>)
}

function Class12Program() {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigate("/")
    }, 5 * 1000)
  })

  return (<div>
    NEET programs for Class 12th
  </div>)
}

function ErrorPage() {

  return (
    <div>
      Error 404! <br />Page Not Found!
    </div>
  )
}

export default App
