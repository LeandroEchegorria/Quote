import React from 'react'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function Quote() {
  return (
    <div className='h-25 d-flex flex-column justify-content-center align-items-center'>
      <figure className='text-center bg-quote-background p-5 w-75 rounded-3 mt-9'>
        <blockquote className='blockquote'>
          <div className='mb-5'>
            <FormatQuoteRoundedIcon />
          </div>
          <p><strong>Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida</strong></p>
        </blockquote>
        <figcaption>Autor <cite title='Source Title'>Confucio</cite></figcaption>
      </figure>
      <div>
        <button type='button' className='btn btn-secondary' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><FavoriteRoundedIcon /></button>
        <button type='button' className='btn btn-secondary' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><EditRoundedIcon /></button>
        <button type='button' className='btn btn-secondary' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos'><ShareRoundedIcon /></button>
      </div>
    </div>

  )
}
