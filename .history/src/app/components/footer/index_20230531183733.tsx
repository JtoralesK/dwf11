import React from 'react'
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="contenedor-footer container">
        <div className="redes-sociales">
            <img src={"/image/facebook.png"} className="link-redes_sociales" ></img>
            <a href="https://www.instagram.com" className="link-redes_sociales" ><i className="fab fa-instagram instagran"></i></a>
            <a href="https://www.linkedin.com" className="link-redes_sociales" ><i className="fab fa-linkedin linkedin"></i></a>
            <a href="https:/www.github.com" className="link-redes_sociales" ><i className="fab fa-github-square github"></i></a>
        </div>
        <div className="footer-text">
            <p className="title-copy">  &copy;Somos<strong>fundación luz solidaria</strong></p>
        </div>
    </div>
  </footer>
  )
}
