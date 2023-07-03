import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import BotonAgregarFav from './botonAgregarFav';
import BotonEditarFrase from './BotonEditarFrase';
import BotonCompartirFrase from './BotonCompartirFrase';

// le paso al componente un objeto que contiene los valores finales de las funciones frasePropia y fraseApi
export default function Quote({ frasePropia, fraseApi }) {
// genero una constante con ambos valores
  const mostrarFrase = frasePropia || fraseApi;

  return (
    <div className='h-25 d-flex flex-column justify-content-center align-items-center'>
      <figure className='w-75 text-center bg-quote-background p-5 rounded-3 mt-9'>
        <blockquote className='blockquote'>
          <div className='mb-5'>
            <FormatQuoteRoundedIcon />
          </div>
          {/* uso la constante para renderizar los valores obtenidos */}
          <p><strong>{mostrarFrase?.text}</strong></p>
        </blockquote>
        <figcaption>Autor <cite title='Source Title'>{mostrarFrase?.author}</cite></figcaption>
      </figure>
      <div>
        <BotonAgregarFav></BotonAgregarFav>
        <BotonEditarFrase></BotonEditarFrase>
        <BotonCompartirFrase></BotonCompartirFrase>
      </div>
    </div>
  );
}

