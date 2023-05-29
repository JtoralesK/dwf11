import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../../../../public/about.jpg";
import Image from "next/image";

export function MainSection() {
  return (
    <section className="position-relative vw-100 vh-100 zindex-offcanvas">
      <h2 className="fw-bold position-absolute top-50 start-50 translate-middle text-light">
        ¡Bienvenido/a a nuestra página de talleres culturales!
      </h2>
      <Image
        src={aboutImg}
        alt={"about"}
        className={"position-absolute top-0 start-0 img-fluid zindex-fixed"}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      />
    </section>
  );
}
