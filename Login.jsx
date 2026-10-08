import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function 
Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate =useNavigate()
    function handleLogin(e){
        e.preventDefault()
        if(username=="Purva" && password=="1234"){
            localStorage.setItem("isLoggedIn",true);
            navigate("/dashboard")
        }
        else{
            alert("Enter valid credentials")
        }
    }
  return (
    <div>
        <h2>
        Login</h2>
        <form onSubmit={handleLogin}>
            <input type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default Login
