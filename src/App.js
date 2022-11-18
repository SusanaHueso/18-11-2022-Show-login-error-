// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Home} from './Containers/Home/Home';
import {Login} from './Containers/Login/Login';
import {Register} from './Containers/Register/Register';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">

    <BrowserRouter>
    

      

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/Register" element={<Register />} />
        
      </Routes>



    </BrowserRouter>

  </div>
  );
}

export default App;
