import React from 'react'
import NavbarDashboard from './componentesDashboard/NavbarDashboard'
import Workspace from './routesDashboard/Workspace'
import FooterDashboard from './componentesDashboard/FooterDashboard'

export default function HomeUsuario() {
  return (
    <>
      <NavbarDashboard></NavbarDashboard>
      <Workspace></Workspace>
      <FooterDashboard></FooterDashboard>
    </>
  )
}

/* 
estructuro el sitio del usuario de la siguiente manera:

HomeUsuario
  NavbarDashboard
  Workspace (es una especie de App.jsx ya que es donde realizo las rutas tanto al dashboard como al historial)
    Dashboard
       Quote
           EditorFrase
    Historial
  FooterDashboard
*/