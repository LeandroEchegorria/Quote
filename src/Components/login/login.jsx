import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <>
    <div className= 'login template d-flex justify-content-center align-items-center vh-100 background'> 
        <div className='form_container p-5 rounded-4 bg-primary'>
          <form action="">
        <h3 className='text-center text-white mb-5'>Ingresá a tu cuenta</h3>
        <div className='mb-3 text-white'>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" placeholder='Tu correo electrónico' className='form-control'/>
        </div>
        <div className='mb-2 text-white'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder='Tu contraseña' className='form-control'/>
        </div>
        <div className='mb-2'>
          <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
          <label htmlFor="check" className='custom-input-label ms-2 text-white'>
            Recordame
          </label>
        </div>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-5'>
          <button className='btn btn-secondary-btn btn-lg'>Ingresar</button>
        </div>
        <p className='text-end mt-2 text-white'>
        <a href="" className='text-white'>¿Olvidaste tu contraseña?</a><Link to="/register" className='ms-2 text-white'>Registrate</Link>
        </p>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login