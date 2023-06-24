"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./index.module.css";
export const SectionCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1526631134603-8d692d622f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://adventurefaktory.com/wp-content/uploads/2020/01/AdventureFaktory-RoyalCaribbean-Pixels-16-1170x780.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Buenos_Aires_-_Tango_dancers_in_Sunderland_Club_-_7090.jpg/1200px-Buenos_Aires_-_Tango_dancers_in_Sunderland_Club_-_7090.jpg",
    "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      showStatus={false}
      swipeable={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={css.imgCarousel}
          />
        </div>
      ))}
    </Carousel>
  );
};
