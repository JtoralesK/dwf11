import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import css from "./acercaDe.module.css";
export const Acerca = () => {
  return (
    <section className={css.quienesSomos} id="acercade">
      <div className="container-sm">
        <h2 className={css.titleQuienesSomos}>Quienes Somos</h2>
        <p className={css.descriptionQuienesSomos}>
          Nuestros talleres son impartidos por profesionales en cada área y se
          enfocan en desarrollar habilidades y conocimientos en temas como
          música, teatro, danza, literatura, artes plásticas y mucho más.
          Además, ofrecemos talleres para todas las edades, desde niños hasta
          adultos mayores.Sumérgete en un mundo lleno de creatividad,
          aprendizaje y conexión con nuestros emocionantes talleres culturales.
          En nuestra lading page, te invitamos a explorar y participar en una
          amplia variedad de actividades que te permitirán sumergirte en la
          riqueza de diversas expresiones artísticas y culturales.
        </p>
      </div>
    </section>
  );
};
