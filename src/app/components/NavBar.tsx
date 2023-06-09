import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export function NavBar() {
  return (
    <nav
      className="position-fixed navbar navbar-expand-lg navbar-light bg-transparent container-fluid"
      style={{ zIndex: "10" }}
    >
      <div className="container-fluid" id="navbarNav">
        <a className="navbar-brand" href="#">
          <Image src={Logo} alt={"logo"} width={100} className="img-fluid" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link text-black"
              aria-current="page"
              href="#acercade"
            >
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#talleres">
              Talleres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
