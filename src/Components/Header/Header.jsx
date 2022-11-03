import React from 'react';
import './Header.css'
// best practice!
import {useNavigate} from 'react-router-dom';


const Header = () =>{
    let navigate = useNavigate();

    return (  
        <div className="headerDesign">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/login")},750)}>Login</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/register")},750)}>Register</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},750)}>Home</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/about")},750)}>About</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/profile")},750)}>Profile</div>
    
        </div>
)}
export default Header;