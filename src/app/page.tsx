import "./page.module.css";
import { Home } from "./components/Home";
import { Contacto } from "./components/contacto";
import { SectionCarousel } from "./components/Carousel";
import { Acerca } from "./components/Acerca-de";
import { Talleres } from "./components/Talleres/index";
import { Novedades } from "./components/Novedades";

export default function App() {
  return (
    <>
      <Home />
      <Acerca />
      <Talleres />
      <SectionCarousel />
      <Novedades />
      <Contacto />
    </>
  );
}
