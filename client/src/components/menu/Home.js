import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/style.css';

const Home = () => {
    return (
        <div>
            <header>
                <div className="container header_container">
                    <div className="header_left">
                        <h1> Wesprzyj fundacje <br /> Rogera Federera!</h1>
                        <p>I believe in the power of people.</p>
                        <a href="https://rogerfedererfoundation.org/" className="btn btn-primary">PRZEKAŻ DATEK</a>
                    </div>
                    <div className="header_right">
                        <div className="header_right-image">
                            <img src="https://www.givengain.com/res-bs4/img/charities-signup-header.svg" alt="Donate" style={{ border: '0.6rem solid white' }} />
                        </div>
                    </div>
                    <div className="header_left">
                        <img src="https://preview.redd.it/zyuqm0gka2h61.jpg?width=1500&format=pjpg&auto=webp&s=6633ebe6624a21ad8bb6d661238314518caa3c0c" alt="Federer" />
                    </div>
                    <div className="header_right">
                        <div className="header_right-image">
                            <h1> Poznaj Jego sposób gry!</h1>
                            <p>Roger Federer potrafi na korcie tenisowym praktycznie wszystko...</p>
                            <Link to="/about" className="btn btn-primary">CZYTAJ WIĘCEJ</Link>
                        </div>
                    </div>
                    <div className="header_left">
                        <div className="header_right-image">
                            <h1> Zakończenie kariery</h1>
                            <p>Wielu podejrzewało, że do tego dojdzie...</p>
                            <Link to="/season2022" className="btn btn-primary">CZYTAJ WIĘCEJ</Link>
                        </div>
                    </div>
                    <div className="header_right">
                        <img src="https://i.pinimg.com/originals/e2/b8/22/e2b822fd8e921743caae9aece71ec96e.png" alt="Retirement" style={{ border: '0.6rem solid white' }} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
