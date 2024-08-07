// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/menu/Home';
import Reservations from './components/reservation/Reservations';
import Contact from './components/menu/Contact';
import About from './components/menu/About';
import Clients from './components/admin/Clients';
import Login from './components/admin/Login';
import AuthContext from './context/AuthContext';
import './../src/styles/style.css';

const App = () => {
  const { user, loading } = useContext(AuthContext);

  console.log('AuthContext:', { user, loading });

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={user?.role === 'admin' ? <Clients /> : <Login />} />
        <Route path="*" element={<Home to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
