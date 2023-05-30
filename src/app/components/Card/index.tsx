import "bootstrap/dist/css/bootstrap.min.css";
type Prop = {
  img: string;
  nombreTaller: string;
  descripcion: string;
};
export function Card(prop: Prop) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={prop.img}
          className="card-img-top"
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{prop.nombreTaller}</h5>
          <p className="card-text fs-6">{prop.descripcion}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
