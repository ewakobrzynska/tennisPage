// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/menu/Home';
import Reservations from './components/reservation/Reservations';
import Contact from './components/menu/Contact';
import About from './components/menu/About';
import './../src/styles/style.css';
import SeasonsContent from './components/menu/Season';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/season2022" element={<SeasonsContent/>}/>
        <Route path="*" element={<Home to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;