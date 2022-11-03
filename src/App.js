import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">

    <BrowserRouter>
    

      <Header />

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        
      </Routes>

      <Footer />


    </BrowserRouter>

  </div>
  );
}

export default App;
