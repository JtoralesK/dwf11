import React from "react";
import css from "./novedades.module.css";
import Image from "next/image";
import Artwork from "../../../../public/artwork.png";
import Clapboard from "../../../../public/clapboard.png";
import Photography from "../../../../public/photography.png";

export const Novedades = () => {
  return (
    <section className={css.features__container}>
      <div className={css.features_titles__container}>
        <h1 className={css.features__heading}>Anuncios y novedades</h1>
        <h4 className={css.features__subtitle}>
          Proximamente estaremos, ofreciendo talleres temáticos y cursos cortos
          sobre temas específicos como historia del arte, cine, fotografía y
          mucho más.
        </h4>
      </div>
      <div className={css.workshop__container}>
        <Image className={css.workshop__img} src={Artwork} alt={"Artwork"} />
        <Image
          className={css.workshop__img}
          src={Clapboard}
          alt={"Clapboard"}
        />
        <Image
          className={css.workshop__img}
          src={Photography}
          alt={"Photography"}
        />
      </div>
    </section>
  );
};
