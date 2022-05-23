import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible]=useState(0)
    const [gastado, setGastado]=useState(0)
    
    useEffect(()=>{
    const totalGastado = gastos.reduce((total, gasto)=>gasto.cantidad + total, 0)
    const totalDisponible = presupuesto-totalGastado


    setGastado(totalGastado)
    setDisponible(totalDisponible)
    },[gastos])
    
    
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
        <span>Disponible: </span> {formatearcantidad(disponible)}
    </p>
    <p>
        <span>Gastado: </span> {formatearcantidad(gastado)}
    </p>

    </div>
    </div>
  )
}

export default ControlPresupuesto