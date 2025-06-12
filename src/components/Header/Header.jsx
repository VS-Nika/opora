import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fon from "./../../assets/fon.png";
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header style={{ backgroundImage: `url(${fon})` }} className="header">
            <div className='container'>
                <nav className="nav">
                    <div className="logo">OPORA</div>

                    {/* Бургер-меню */}
                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                    {/* Обычное меню */}
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Главная</Link>
                        <Link to="/about" className="nav-link">О нас</Link>
                        <Link to="/catalog" className='nav-link'>Каталог</Link>
                        <Link to="/delivery" className="nav-link">Оплата и доставка</Link>
                        <Link to="/portfolio" className="nav-link">Портфолио</Link>
                    </div>
                </nav>
                {/* Выпадающее меню */}
                <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={toggleMenu}>Главная</Link>
                    <Link to="/about" className="nav-link" onClick={toggleMenu}>О нас</Link>
                    <Link to="/catalog" className="nav-link" onClick={toggleMenu}>Каталог</Link>
                    <Link to="/delivery" className="nav-link" onClick={toggleMenu}>Оплата и доставка</Link>
                    <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>Портфолио</Link>
                </div>
                <section className="main-section">
                    <div className="main-content">
                        <h1>РЕСУРСНЫЕ УКРАШЕНИЯ</h1>
                        <p>Ресурсное украшение - украшения, созданные из натуральных камней и минералов, заряженные целительской энергией для того, чтобы исполнять ваши мечты и желания</p>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;