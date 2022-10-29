import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  import Login from '../pages/Login';
  import Register from "../pages/Register"
  import Home from "../pages/Home"
  import Profile from "../pages/Profile"
  import Landing from "../pages/Landing"


export default function RouterPaths() {
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* <Route path="/app" element={<Home/>}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/events" element={<Profile/>}/>
                <Route path="/resources" element={<Profile/>}/>
                <Route path="/notification" element={<Profile/>}/>
            </Route> */}
            
        </Routes>
    )
}
