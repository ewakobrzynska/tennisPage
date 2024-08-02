import React from 'react';
import './../styles/style.css';

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("nav-menu");
    if (menu.className === "nav-menu") {
      menu.className += " responsive";
    } else {
      menu.className = "nav-menu";
    }
  };

  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html"><h4>ROGER FEDERER & TENIS</h4></a>
        <ol className="nav-menu" id="nav-menu">
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">STYL GRY</a></li>
          <li><a href="sezon2022.html">SEZONY</a>
            <ul>
              <li><a href="sezon2020.html">Sezon 2020</a></li>
              <li><a href="sezon2019.html">Sezon 2019</a></li>
              <li><a href="sezon2018.html">Sezon 2018</a></li>
            </ul>
          </li>
          <li><a href="contact.html">KONTAKT</a></li>
          <li>
            <button className="btn2" onClick={toggleMenu}>ZMIEŃ MOTYW</button>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
