import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
    <form>
      <div className='campo'>
          <label>Filtrar Gastos</label>
          <select
          onChange={e => setFiltro(e.target.value)}>
          <option value='' >Todas las Categorias</option>
                 <option value='ahorro' >Ahorro</option>
                 <option value='comida' >Comida</option>
                 <option value='hogar' >Hogar</option>
                 <option value='gastos' >Varios</option>
                 <option value='ocio' >Ocio</option>
                 <option value='salud' >Salud</option>
                 <option value='suscripciones' >Suscripciones</option>
          </select>
      </div>
    </form>

    </div>
  )
}

export default Filtros