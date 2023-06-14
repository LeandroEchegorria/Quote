import React from 'react'
import NavbarDashboard from './Navbardashboard'
import Workspace from './Workspace'
import FooterDashboard from './FooterDashboard'

export default function HomeUsuario() {
  return (
    <>
      <NavbarDashboard/>
      <Workspace/>
      <FooterDashboard/>
    </>
  )
}

//creo proyecto con "rfc"
//estructuro el sitio del usuario de la siguiente manera:

// Home Usuario
//   NavbarDashboard
//   Workspace
//     Dashboard
//        Quote
//     Historial
//   FooterDashboard
