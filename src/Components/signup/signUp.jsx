import React from 'react'
import { Link } from 'react-router-dom'
import './signUp.css'

function Signup() {
  return (
    <>
    <div className= 'signup template d-flex justify-content-center align-items-center vh-100 background'> 
        <div className='form_container p-5 rounded-4 bg-primary'>
          <form action="">
              <h3 className='text-center text-white'>Crear una nueva cuenta</h3>
              <p className='text-center mt-3 text-white'>
                  ¿Ya tenés una cuenta? <Link to="/login" className='ms-2 text-white'>Iniciá sesión</Link>
              </p>
              <div className="row">
                <div className="col">
                  <div className='mb-3 text-white'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder='Nombre' className='form-control'/>
                  </div>
                </div>
              <div className="col">
                  <div className='mb-3 text-white'>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" placeholder='Apellido' className='form-control'/>
                  </div>
              </div>
          </div>
              <div className='mb-3 text-white'>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" placeholder='Tu correo electrónico' className='form-control'/>
              </div>
        <div className='mb-3 text-white'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder='Tu contraseña' className='form-control'/>
        </div>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-5'>
          <button className='btn btn-secondary-btn btn-lg'>Crear</button>
        </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Signup