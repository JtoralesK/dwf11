import aboutImg from "../../../../public/about.jpg";
import Image from "next/image";
import css from "./home.module.css";
export function Home() {
  return (
    <section className={css.home__container}>
      <h2 className={css.home__title}>
        ¡Bienvenido/a a nuestra página de talleres culturales!
      </h2>
      <Image src={aboutImg} alt={"about"} className={css.home__background} />
    </section>
  );
}
