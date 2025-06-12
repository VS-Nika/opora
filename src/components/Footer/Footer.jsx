import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  const phoneNumber = '+79221530507';
  const message = encodeURIComponent('Здравствуйте, хочу заказать украшение!');
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column logo-social">
            <div className="logo-footer">OPORA</div>
            <div className="social-icons">
              <a href="https://t.me/resursinme" target="_blank" rel="noopener noreferrer">
                <FaTelegram className='i'/>
              </a>
              <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp className='i'/>
              </a>
              <a href="mailto:nika.sold.05@gmail.com">
                <MdEmail className='i'/>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Меню</h3>
            <ul>
              <li><Link to="/" className='link'>Главная</Link></li>
              <li><Link to="/about" className='link'>О нас</Link></li>
              <li><Link to="/catalog" className='link'>Каталог</Link></li>
              <li><Link to="/portfolio" className='link'>Портфолио</Link></li>
              <li><Link to="/delivery" className='link'>Оплата и доставка</Link></li>
              <li><Link to="/privacy" className='link'>Политика конфиденциальности</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>О компании</h3>
            <p>ИП Павлова Светлана Павловна</p>
            <p>Юр. адрес: 620103, Свердловская обл., г. Екатеринбург, ул. Селькоровская, д. 100</p>
            <p>ОГРНИП 323665800097242</p>
            <p>ИНН 7710140679</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;