import "bootstrap/dist/css/bootstrap.min.css";
import { SectionInputs } from "./sectionInput";
import { FaBeer } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

export function Contacto() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffb923",
          color: "white",
          padding: "30px",
        }}
      >
        <div id="contacto" className="container-sm text-center ">
          <h1 className="font-weight-bold display-3">Contacto</h1>
          <div className="row p-lg-4">
            <div className="col-sm-16 col-md-6 text-center ">
              <div className=" d-md-flex flex-column d-none">
                <img
                  src="data:image/png;base64,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"
                  className="img-thumbnail rounded float-start p-2"
                  style={{ width: "120px" }}
                  alt="..."
                ></img>
                <div
                  className="d-flex flex-row mb-3 justify-content-around "
                  style={{ width: "120px" }}
                >
                  <AiFillInstagram size={"50px"} />
                  <AiFillFacebook size={"50px"} />
                  <AiFillTwitterSquare size={"50px"} />
                </div>
                <div style={{ width: "60%" }}>
                  <p className="text-start">
                    Nuestros talleres son impartidos por profesionales en cada
                    área y se enfocan en desarrollar habilidades y conocimientos
                    en temas como música, teatro, danza, literatura, artes
                    plásticas y mucho más. Además, ofrecemos talleres para todas
                    las edades, desde niños hasta adultos mayores.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-16 col-md-6 text-center ">
              <SectionInputs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
