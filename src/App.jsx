import React from 'react';
import './style.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Delivery from './pages/Delivery';
import Portfolio from './pages/Portfolio';
import Catalog from './pages/Catalog';
import CookieConsent from "react-cookie-consent";
import Privacy from './pages/Privacy';


function App() {
  return (
    <>
      <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>   
      </BrowserRouter>   
      
      <CookieConsent
        location="bottom"
        buttonText="Принять"
        cookieName="myAppCookieConsent"
        style={{ background: "#909090", fontSize:"1em", padding:"0.5em 2em", lineHeight:"1.5"}}
        buttonStyle={{ color: "#fff", fontSize: "0.8rem", backgroundColor: "#6C2E2E", borderRadius:"5px", padding:"10px 20px", fontWeight:"600", textTransform:"uppercase"}}
        expires={150}
      >
        Используя данный сайт, вы даете согласие на использование файлов cookie, помогающих нам сделать его удобнее для вас.
      </CookieConsent>
      </> 
  )
}

export default App
