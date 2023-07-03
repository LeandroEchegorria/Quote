import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contactanos = () => {

  return (
    <div className="row">
      <div className="">
        <h4 className="mb-3 text-primary-btn">Contactanos</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="col-12">
              <label for="zip" className="form-label">Comentario</label>
              <textarea type="text" className="form-control" id="zip" placeholder="Escriba su consulta" required/>

            </div>
          </div>

          <hr className="my-4"/>
          <button className="btn btn-primary btn-sm px-4 py-2" type="submit">Enviar</button>

        </form>
      </div>
    </div>
          
  )
}

export default Contactanos

