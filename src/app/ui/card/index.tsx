"use client";
import css from "./index.module.css";
import React from "react";
type Prop = {
  img: string;
  descripcion: string;
  title: string;
  link: string;
};
export const Card = (p: Prop) => {
  const openNewTab = (link: string) => {
    window.open(link); // Reemplaza con la URL de la página que deseas abrir en una nueva pestaña
  };
  return (
    <>
      <div className={css.cardTalleres}>
        <img src={p.img}></img>
        <h3>{p.title}</h3>
        <p>{p.descripcion}</p>
        <button
          onClick={() => {
            openNewTab(p.link);
          }}
        >
          más info
        </button>
      </div>
    </>
  );
};
