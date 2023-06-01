import React from 'react'
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="contenedor-footer">
        <div className="redes-sociales">
            <img src={"/image/facebook.png"} className="link-redes_sociales" ></img>
            <img src={"/image/instagram.png"} className="link-redes_sociales" ></img>
           
        </div>
        <div className="footer-text">
            <p className="title-copy">&copy; Somos<strong>fundación luz solidaria</strong></p>
        </div>
    </div>
  </footer>
  )
}
