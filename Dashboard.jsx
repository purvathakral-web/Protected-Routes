import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate();
    function logOut(){
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div>
        <h2>Welcome Admin!!!
    </h2>
    <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard