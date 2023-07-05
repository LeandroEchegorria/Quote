import { useState } from 'react';
import Swal from 'sweetalert2';

const Contactanos = () => {

  const [datos , setDatos] = useState({ 
    nombre: "", 
    email: "", 
    comentario: ""
  })

  const handleChange = (event) => {
    setDatos({...datos , [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    setTimeout(event.preventDefault()) 
    console.table(datos)
    return (
      Swal.fire({
        title: 'Datos ingresados',
        text: `Nombre: ${datos.nombre}\nEmail: ${datos.email}`,
        icon: 'success'
      , }
    )).then (()=> {
      window.location.reload()
    })
  }

  return (
    <div className="row">
      <div className="">
        <h4 className="mb-3 text-primary-btn">Contactanos</h4>
        <form className="needs-validation" novalidate>

          <div className="row g-3">
            <div className="col-sm-9">
              <label className="form-label">Nombre completo</label>
              <input 
                type="text" 
                name='nombre'
                className="form-control" 
                id="fullName" 
                placeholder="Nombre completo" 
                value={datos.nombre}
                onChange={handleChange}
                required
              />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
            </div>

            <div className="col-12">
              <label className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input 
                type="email" 
                name='email'
                className="form-control" 
                id="email" 
                placeholder="you@example.com"
                value={datos.email}
                onChange={handleChange}
              />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="col-12">
              <label className="form-label">Comentario</label>
              <textarea 
                type="text" 
                name='comentario'
                className="form-control" 
                id="zip" 
                placeholder="Escriba su consulta" 
                value={setDatos.comentario}
                onChange={handleChange}
                required
              />

            </div>
          </div>

          <hr className="my-4"/>
          
          <button className="btn btn-primary btn-sm px-4 py-2" type="submit" >Enviar</button>

        </form>
      </div>
    </div>
          
  )
}

export default Contactanos

