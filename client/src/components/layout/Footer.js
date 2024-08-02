import React from 'react';
import './../../styles/style.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer_container">
                <div className="footer">
                    <a href="/" className="footer_logo">
                        <h4>ROGER FEDERER & TENNIS</h4>
                    </a>
                </div>
                <div className="footer">
                    <h4>LINKI</h4>
                    <ul className="permalinks">
                        <li><a href="/">•Home</a></li>
                        <li><a href="/about">•Styl gry</a></li>
                        <li><a href="/reservations">•Rezerwacje</a></li>
                        <li><a href="/contact">•Kontakt</a></li>
                    </ul>
                </div>
                <div className="footer">
                    <h4>Skontaktuj się z nami</h4>
                    <div>
                        <p>+12 345 678</p>
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <small> &copy Ewa Kobrzyńska <br />Uniwersytet Jagielloński w Krakowie</small>
            </div>
        </footer>
    );
};

export default Footer;