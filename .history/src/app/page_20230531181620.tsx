import Image from "next/image";
import styles from "./page.module.css";
import { Contacto } from "./components/contacto";
import { Footer } from "./components/footer"; 
export default function Home() {
  return (
    <>
      <Contacto />
      <Footer/>
    </>
  );
}
