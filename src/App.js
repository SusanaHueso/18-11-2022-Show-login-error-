// import logo from './logo.svg';
import './App.css';
import {Home} from './Containers/Home/Home';
import PopularFilms from './Containers/PopularFilms/PopularFilms';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">

    <BrowserRouter>
    

      <Header />

      <Routes>


        <Route path="/" element={<Home />} />
        
        <Route path="/PopularFilms" element={<PopularFilms />} />
        
      </Routes>

      <Footer />


    </BrowserRouter>

  </div>
  );
}

export default App;
