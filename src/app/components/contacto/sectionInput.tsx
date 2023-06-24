import "bootstrap/dist/css/bootstrap.min.css";

export function SectionInputs() {
  const style = {
    margin: "20px 0",
    width: "40%",
    "@media (minWidth: 768px)": {
      width: "40%",
    },
  } as React.CSSProperties;
  return (
    <>
      <form className="d-flex flex-column text-start" style={{ width: "100%" }}>
        <div className="mb-3">
          <label className="form-label">
            <p style={{ margin: "0" }}>Nombre</p>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <p style={{ margin: "0" }}>Email</p>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <p style={{ margin: "0" }}>Telefono</p>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <textarea
          className="form-control"
          style={{ height: "100px" }}
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <button
          style={style}
          type="submit"
          className="btn btn-primary w-md-auto"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
