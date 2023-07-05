import func1 from '../assets/comofunciona1.png';
import func2 from '../assets/comofunciona2.png';
import func3 from '../assets/comofunciona3.png';

const ComoFunciona = () => {
  return (
    <div className="row bg-primary p-5 text-white mt-9">
      <h1>Cómo Funciona</h1>
      <p>¡Descubrí cómo podés utilizar nuestro sitio web para crear, compartir y descargar frases motivacionales, en sólo unos simples pasos!</p>
      <div className="col-lg-4 text-center">
        <h3 className="fw-normal p-2">Elegí</h3>
        <img className="bd-placeholder-img m-5 " width="140" height="140" src={func1} alt='Como funciona 1' />
        <p>¡Elegí la frase que te vuele la peluca o creá la tuya propia para arrancar el día con toda la pila!</p>
      </div>
      
      <div className="col-lg-4 text-center">
        <h3 className="fw-normal p-2">Editá</h3>
        <img className="bd-placeholder-img m-5" width="140" height="140" src={func2} alt='Como funciona 1' />
        <p>Si querés darle un toque más piola, ¡Transformala en una imagen bien copada!</p>
      </div>

      <div className="col-lg-4 text-center">
        <h3 className="fw-normal p-2">Compartí</h3>
        <img className="bd-placeholder-img m-5" width="140" height="140" src={func3} alt='Como funciona 1' />
        <p>¡Compartí tu frase motivacional hoy y llená las redes sociales con buena onda!</p>
        
      </div>
    </div>
  )
}

export default ComoFunciona