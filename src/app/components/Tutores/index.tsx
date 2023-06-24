"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Carousel } from "react-bootstrap";
export const Tutores = () => {
  const images = [
    "https://images.unsplash.com/photo-1526631134603-8d692d622f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://adventurefaktory.com/wp-content/uploads/2020/01/AdventureFaktory-RoyalCaribbean-Pixels-16-1170x780.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Buenos_Aires_-_Tango_dancers_in_Sunderland_Club_-_7090.jpg/1200px-Buenos_Aires_-_Tango_dancers_in_Sunderland_Club_-_7090.jpg",
    "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
  ];
  return (
    <section>
      <Carousel>
        <Carousel.Item
          style={{
            height: "80vh",
          }}
        >
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src={images[0]}
            alt="First slide"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "80vh",
          }}
        >
          <img
            className="d-block  w-100 h-100 object-fit-cover"
            src={images[1]}
            alt="Second slide"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "80vh",
          }}
        >
          <img
            className="d-block  w-100 h-100 object-fit-cover"
            src={images[2]}
            alt="Third slide"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "80vh",
          }}
        >
          <img
            className="d-block  w-100 h-100 object-fit-cover"
            src={images[3]}
            alt="Third slide"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "80vh",
          }}
        >
          <img
            className="d-block  w-100 h-100 object-fit-cover"
            src={images[4]}
            alt="Third slide"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

/*
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="imagen1.jpg" alt="Imagen 1">
      </div>
      <div class="carousel-item">
        <img src="imagen2.jpg" alt="Imagen 2">
      </div>
      <div class="carousel-item">
        <img src="imagen3.jpg" alt="Imagen 3">
      </div>
    </div>
    
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Siguiente</span>
    </a>
  </div>

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
    */
