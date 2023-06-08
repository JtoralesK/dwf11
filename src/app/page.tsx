import "./page.module.css";
import { Home } from "./components/Home";
import { Contacto } from "./components/contacto";
import { Tutores } from "./components/Tutores";
import { Acerda } from "./components/Acerca-de";
import { Talleres } from "./components/Talleres";
import { Novedades } from "./components/Novedades";

export default function App() {
  return (
    <>
      <Home />
      <Acerda />
      <Talleres />
      <Tutores />
      <Novedades />
      <Contacto />
    </>
  );
}
