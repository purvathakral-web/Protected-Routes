import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import Login from './Login'
import protectedRoutes from './protectedRoutes'

function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={protectedRoutes}>       
           <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>

        
      </Routes>
      </div>
  )
}

export default App