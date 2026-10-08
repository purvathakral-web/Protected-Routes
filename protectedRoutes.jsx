import React from 'react'
import { Outlet } from 'react-router-dom';

function protectedRoutes() {
    const isLoggedIn=localStorage.getItem("isLoggedIn")==="true"
   if(!isLoggedIn){
        return <Navigate to={"/login"}/>;
    }
    return <Outlet/>;
  
}

export default protectedRoutes