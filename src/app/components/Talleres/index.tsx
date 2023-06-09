import React from "react";
import css from "./talleres.module.css";

export const Talleres = () => {
  return (
    <section className={css.sectionTalleres} id="talleres">
      <div className="container-sm">
        <h2 className={css.titleTalleres}>Talleres</h2>
        <div className={css.containerCardTalleres}>
          <article className={css.cardTalleres}>
            <img src={"/image/taller-musica.jpg"}></img>
            <h3>Taller de música</h3>
            <p>
              aprende a tocar un instrumento o a cantar en nuestro taller de
              música. Tenemos clases individuales y grupales para todos los
              niveles.
            </p>
            <button>más info</button>
          </article>
          <article className={css.cardTalleres}>
            <img src={"/image/taller-teatro.jpg"}></img>
            <h3>Taller de música</h3>
            <p>
              aprende a tocar un instrumento o a cantar en nuestro taller de
              música. Tenemos clases individuales y grupales para todos los
              niveles.
            </p>
            <button>más info</button>
          </article>
          <article className={css.cardTalleres}>
            <img src={"/image/taller-danza.jpg"}></img>
            <h3>Taller de música</h3>
            <p>
              aprende a tocar un instrumento o a cantar en nuestro taller de
              música. Tenemos clases individuales y grupales para todos los
              niveles.
            </p>
            <button>más info</button>
          </article>
          <article className={css.cardTalleres}>
            <img src={"/image/taller-literatura.jpg"}></img>
            <h3>Taller de música</h3>
            <p>
              aprende a tocar un instrumento o a cantar en nuestro taller de
              música. Tenemos clases individuales y grupales para todos los
              niveles.
            </p>
            <button>más info</button>
          </article>
          <article className={css.cardTalleres}>
            <img src={"/image/taller-arte.jpg"}></img>
            <h3>Taller de música</h3>
            <p>
              aprende a tocar un instrumento o a cantar en nuestro taller de
              música. Tenemos clases individuales y grupales para todos los
              niveles.
            </p>
            <button>más info</button>
          </article>
        </div>
      </div>
    </section>
  );
};
