import React from 'react';
import Reactlogo from './download.jfif';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Pilgrim Website</h1>
            <a href="/" className="logo"></a>
                <img src={Reactlogo} alt="Logo" className="logo-img" /> 
                <nav className="navbar">
                    
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/places" className="nav-link">Places</a></li>
                        <li className="nav-item"><a href="/pilgrimages" className="nav-link">Pilgrimages</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
