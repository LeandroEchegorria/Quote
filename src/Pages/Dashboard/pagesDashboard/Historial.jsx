import React from 'react'
import QuoteData from '../dataDashboard/QuoteData'
import BotonSacarFav from '../componentesDashboard/botonSacarFav';
import BotonCopiarFrase from '../componentesDashboard/BotonCopiarFrase';

export default function Historial() {
// este fragmento de código se hace con un archivo data (dataDashboard/QuoteData) con algunas frases pre establecidas. Lo que se hace es recorrer el array y renderizarlo. Evaluar cómo se reemplaza esto con la base de datos
  const historial = QuoteData.map(frase => {
    return (
      <div className='col' id={frase.id}>
        <div className='card border-0'>
          <div className='card-header bg-quote-background border-0 d-flex justify-content-between align-items-center'>
            <h6 className='m-0'><strong>Quote #{frase.id}</strong></h6>
            <div>
              <BotonSacarFav></BotonSacarFav>
              <BotonCopiarFrase></BotonCopiarFrase>
            </div>

          </div>
          <div className='card-body'>
            <blockquote className='blockquote mb-0'>
              <p className='text-subtitle'>{frase.quote}</p>
              <footer className='blockquote-footer'>Autor <cite title='Source Title'>{frase.author}</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section className='min-vh-100 bg-background d-flex flex-column justify-content-center align-items-center py-11'>
      <div className='container row row-cols-1 row-cols-md-3 g-4 col-lg-100 mx-auto'>
        {historial}
      </div>
    </section>
  )
}
