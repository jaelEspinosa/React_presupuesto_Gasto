import React, { useEffect, useState } from 'react'
import { formatearcantidad } from '../helpers'
import{CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const ControlPresupuesto = ({
       gastos, 
       setGastos,
       presupuesto,
       setPresupuesto, 
       setIsValidPresupuesto

       }) => {
    const[porcentaje, setPorcentaje]=useState(0)
    const [disponible, setDisponible]=useState(0)
    const [gastado, setGastado]=useState(0)
    
    useEffect(()=>{
    const totalGastado = gastos.reduce((total, gasto)=>gasto.cantidad + total, 0)
    const totalDisponible = presupuesto-totalGastado
    
    // calcular porcentaje gastato
    const nuevoPorcentaje = (((presupuesto - totalDisponible)/ presupuesto)*100).toFixed(2);
    
    setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)
    }, 1500);

    setGastado(totalGastado)
    setDisponible(totalDisponible)
    },[gastos])
  const handleResetApp = ()=>{
      const resultado = confirm('¿deseas borrar Todo?')
      if (resultado){
         setGastos([]);
         setPresupuesto(0)
         setIsValidPresupuesto(false);

      }
  } 
   
 
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

    <div>
        <CircularProgressbar
            styles={buildStyles({
                pathColor: porcentaje > 100 ? '#802424' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: porcentaje > 100 ? '#802424' : '#3B82F6'
                
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`} 
        />
    </div>

    <div className='contenido-presupuesto'>
    <button className='reset-app'
            type='button'
            onClick={handleResetApp}>
        Resetear App
    </button>
    <p>
        <span>Presupuesto: </span> {formatearcantidad(presupuesto)}
    </p> 
    <p className={`${disponible < 0 ? 'negativo' : '' }`}>
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