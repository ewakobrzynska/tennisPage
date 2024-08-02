import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/style.css';

const Header = () => {
    return (
        <nav>
            <div className="container nav_container">
                <Link to="/"><h4>ROGER FEDERER & TENIS</h4></Link>
                <ol className="nav_menu" id="NAV">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">STYL GRY</Link></li>
                    <li><Link to="/reservations">REZERWACJE</Link></li>
                    <li><Link to="/contact">KONTAKT</Link></li>
                </ol>
            </div>
        </nav>
    );
};

export default Header;