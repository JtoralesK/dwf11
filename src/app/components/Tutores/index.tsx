import React from 'react'

export const Tutores = () => {
  return (
    <section className='container-tutores'>
      <h2 className='title-tutores'>Tutores</h2>
      <div className='container-card_tutores'>
          <article className='card-tutores'>
            <img src={"/image/artes.jpg"} alt="" />
            <h3>Guadalupe Ferrero</h3>
            <p>artes plásticas</p>
          </article>
          <article className='card-tutores'>
            <img src={"/image/danza.jpg"} alt="" />
            <h3>Iván Gillete</h3>
            <p>danza</p>
          </article>
          <article className='card-tutores'>
            <img src={"/image/literatura.jpg"} alt="" />
            <h3>Carla Ferrero</h3>
            <p>literatura</p>
          </article>
          <article className='card-tutores'>
            <img src={"/image/musica.jpg"} alt="" />
            <h3>Marisa Ramírez</h3>
            <p>música</p>
          </article>
          <article className='card-tutores'>
            <img src={"/image/teatro.jpg"} alt="" />
            <h3>Melisa Redondo</h3>
            <p>teatro</p>
          </article>
      </div>
    </section>
  )
}
