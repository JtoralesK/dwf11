import Image from "next/image";
import "./page.module.css";
import { Contacto } from "./components/contacto";
import { Tutores } from "./components/Tutores";
import { Acerda } from "./components/Acerca-de";
import { Talleres } from "./components/Talleres";
import { Novedades } from "./components/Novedades";

export default function Home() {
  return (
    <>
      <Acerda/>
      <Talleres/>
      <Tutores/>
      <Novedades />
      <Contacto />
   
    </>
  );
}
