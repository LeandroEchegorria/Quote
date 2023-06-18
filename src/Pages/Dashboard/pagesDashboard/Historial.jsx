import React from 'react'
import QuoteData from '../dataDashboard/QuoteData'
import BotonSacarFav from '../componentesDashboard/botonSacarFav';
import BotonCompartirFrase from '../componentesDashboard/BotonCompartirFrase';

export default function Historial() {

  const historial = QuoteData.map(frase => {
    return (
      <div className='col' id={frase.id}>
        <div className='card border-0'>
          <div className='card-header bg-quote-background border-0 d-flex justify-content-between align-items-center'>
            <h6 className='m-0'><strong>Quote #{frase.id}</strong></h6>
            <div>
              <BotonSacarFav></BotonSacarFav>
              <BotonCompartirFrase></BotonCompartirFrase>
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
