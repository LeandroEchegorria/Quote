
import QuoteData from './QuoteData'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function Historial() {
  const historial = QuoteData.map(frase => {
    return (
      <div className='col' key={frase.id}>
        <div className='card border-0'>
          <div className='card-header bg-quote-background border-0 d-flex justify-content-between align-items-center'>
            <h6 className='m-0'><strong>Quote #{frase.id}</strong></h6>
            <div>
              <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><FavoriteRoundedIcon /></button>
              <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><EditRoundedIcon /></button>
              <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><ShareRoundedIcon /></button>
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
      {/* <div className='text-start'>
        <h2 className='display-7 fw-bold text-body-emphasis mb-3'>Tu historial</h2>
      </div> */}
      <div className='container row row-cols-1 row-cols-md-3 g-4 col-lg-100 mx-auto'>
        {historial}
      </div>
    </section>
  )
}
