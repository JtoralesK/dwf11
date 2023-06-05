import React from 'react';


export const Talleres = () => {
  return (
    <section className='section-talleres'>
      <h2 className='title-talleres'>Talleres</h2>
      <div className='container-card_talleres'>
          <article className='card-talleres'>
            <img src={"/image/taller-musica.jpg"}></img>
            <h3>Taller de música</h3>
            <p>aprende a tocar un instrumento o a cantar en nuestro taller de música. Tenemos clases individuales y grupales para todos los niveles.</p>
            <button >más info</button>
          </article>
          <article className='card-talleres'>
            <img src={"/image/taller-teatro.jpg"}></img>
            <h3>Taller de música</h3>
            <p>aprende a tocar un instrumento o a cantar en nuestro taller de música. Tenemos clases individuales y grupales para todos los niveles.</p>
            <button >más info</button>
          </article>
          <article className='card-talleres'>
            <img src={"/image/taller-danza.jpg"}></img>
            <h3>Taller de música</h3>
            <p>aprende a tocar un instrumento o a cantar en nuestro taller de música. Tenemos clases individuales y grupales para todos los niveles.</p>
            <button >más info</button>
          </article>
          <article className='card-talleres'>
            <img src={"/image/taller-literatura.jpg"}></img>
            <h3>Taller de música</h3>
            <p>aprende a tocar un instrumento o a cantar en nuestro taller de música. Tenemos clases individuales y grupales para todos los niveles.</p>
            <button >más info</button>
            </article>
          <article className='card-talleres'> 
            <img src={"/image/taller-arte.jpg"}></img>
            <h3>Taller de música</h3>
            <p>aprende a tocar un instrumento o a cantar en nuestro taller de música. Tenemos clases individuales y grupales para todos los niveles.</p>
            <button >más info</button>
            
            </article>
        </div>
    </section>
  )
}
