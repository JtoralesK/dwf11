import css from "./index.module.css";
type Prop = {
  img: string;
  descripcion: string;
  title: string;
};
export const Card = (p: Prop) => {
  return (
    <>
      <div className={css.cardTalleres}>
        <img src={p.img}></img>
        <h3>{p.title}</h3>
        <p>{p.descripcion}</p>
        <button>más info</button>
      </div>
    </>
  );
};
