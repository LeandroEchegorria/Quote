import { React, useRef, useState } from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import BotonAgregarFav from './botonAgregarFav';
import BotonEditarFrase from './BotonEditarFrase';
import BotonCopiarFrase from './BotonCopiarFrase';
import EditorFrase from '../componentesDashboard/EditorFrase';

// le paso al componente un objeto que contiene los valores finales de las funciones frasePropia y fraseApi
export default function Quote({ frasePropia, fraseApi }) {
  // genero una constante con ambos valores
  const mostrarFrase = frasePropia || fraseApi;
  const [editorDeFrase, setEditorDeFrase] = useState(false);
  // genero dos constantes para poder copiar los valores de frase y autor y poder guardarlos en el portapapeles (posibilidad de copiar la frase y compartirla por mensajes)
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  // genero una función que va a renderizar el editor de frases en formato imagen al clickear el botón
  const mostrarEditorDeFrase = () => {
    setEditorDeFrase(true);
  }

  return (
    <div className='container vw-100 py-5 px-5 h-25 d-flex flex-column justify-content-center align-items-center'>
      <figure className='text-center bg-quote-background p-5 rounded-3 mt-9'>
        <blockquote className='blockquote'>
          <div className='mb-5'>
            <FormatQuoteRoundedIcon />
          </div>
          {/* uso la constante para renderizar los valores obtenidos */}
          <p ref={quoteRef}><strong>{mostrarFrase?.text}</strong></p>
        </blockquote>
        <figcaption>Autor <cite title='Source Title' ref={authorRef}>{mostrarFrase?.author}</cite></figcaption>
      </figure>
      <div>
        <BotonAgregarFav></BotonAgregarFav>
        <BotonEditarFrase mostrarEditorDeFrase={mostrarEditorDeFrase}></BotonEditarFrase>
        <BotonCopiarFrase quoteRef={quoteRef} authorRef={authorRef} />
      </div>
      <div className='d-grid gap-2 d-sm-flex justify-content-sm-center my-9'>
        {editorDeFrase && <EditorFrase mostrarFrase={mostrarFrase} />}
      </div>
    </div>
  );
}