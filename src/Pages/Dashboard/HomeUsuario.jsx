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

/*

CHECK Día 1: Maquetado sitio (configuración bootstrap, lectura de documentación y clases, creación de carpeta Dashboard (como una página) y dentro creación de componentes, páginas, enrutamientos entre paginas)

CHECK Día 2: instalación de sweetAlert2, implementación de popups para: eliminar frase de historial y compartir. Además se realizó la generación de funciones para renderizado eventual (el fin es renderizar un componente importado al momento de clickear en el botón de 'frase del día').

CHECK Día 3: terminar todos los popups de cada boton (creación de componente por cada botón con su respectivo popup: botonAgregarFav, botonEliminarFav, botonEditarFrase, botonCompartir, botonCrearFrase).

CHECK Día 4: creación de un useState / useContext / useEffect / useRef para la frase ingresada por el usuario. 

CHECK Día 5: solicitud API (para generar 'frase del día' en el componente QUOTE). 

CHECK día 6/7: agregar otras funcionalidades (borrar frase, copiar frase en portapapeles, crear una imagen de la frase en diferentes formatos)

*/