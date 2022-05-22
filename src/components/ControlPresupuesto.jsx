import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const formatearcantidad = (cantidad) =>{
        return cantidad.toLocaleString('es-ES',{
            style:'currency',
            currency:'EUR'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

    <div>
        <p>gráfica aqui</p>
    </div>

    <div className='contenido-presupuesto'>
    <p>
        <span>Presupuesto: </span> {formatearcantidad(presupuesto)}
    </p> 
    <p>
        <span>Disponible: </span> {formatearcantidad(0)}
    </p>
    <p>
        <span>Gastado: </span> {formatearcantidad(0)}
    </p>

    </div>
    </div>
  )
}

export default ControlPresupuesto