import React from "react";
import css from "./tutores.module.css";
export const Tutores = () => {
  return (
    <section className={css.containerTutores}>
      <h2 className={css.titleTutores}>Tutores</h2>
      <div className={css.containerCardTutores}>
        <article className={css.cardTutores}>
          <img src={"/image/artes.jpg"} alt="" />
          <h3>Guadalupe Ferrero</h3>
          <p>artes plásticas</p>
        </article>
        <article className={css.cardTutores}>
          <img src={"/image/danza.jpg"} alt="" />
          <h3>Iván Gillete</h3>
          <p>danza</p>
        </article>
        <article className={css.cardTutores}>
          <img src={"/image/literatura.jpg"} alt="" />
          <h3>Carla Ferrero</h3>
          <p>literatura</p>
        </article>
        <article className={css.cardTutores}>
          <img src={"/image/musica.jpg"} alt="" />
          <h3>Marisa Ramírez</h3>
          <p>música</p>
        </article>
        <article className={css.cardTutores}>
          <img src={"/image/teatro.jpg"} alt="" />
          <h3>Melisa Redondo</h3>
          <p>teatro</p>
        </article>
      </div>
    </section>
  );
};
