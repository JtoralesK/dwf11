"use client";
import React from "react";
import css from "./talleres.module.css";
import { ArrTalleres } from "../talleres";
import { Card } from "@/app/ui/card";
export const Talleres = () => {
  return (
    <section className={css.sectionTalleres} id="talleres">
      <div className="container-sm">
        <h2 className={css.titleTalleres}>Talleres</h2>
        <div className={css.containerCardTalleres}>
          {ArrTalleres.map((e: any) => {
            return (
              <Card
                img={e.img}
                descripcion={e.descripcion}
                title={e.title}
                link={e.link}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
