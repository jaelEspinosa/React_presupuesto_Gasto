import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    
    const ocultarModal = ()=>{

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)   
        }, 300);
       
      
       
    }
    return (
    <div className='modal'>
          <div className='cerrar-modal'>
          <img 
              src={CerrarBtn} 
              alt='cerrar'
              onClick ={ocultarModal}              
              />
          </div>
          <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
              <legend>Nuevo Gasto</legend>

           <div className='campo'>
             <label htmlFor='nombre'>Nombre Gasto</label>
             <input
                 id='nombre'
                 type = 'text'
                 placeholder='Añade Descripción del Gasto'
             />

           </div>   
           <div className='campo'>
             <label htmlFor='cantidad'>cantidad</label>
             <input
                 id='cantidad'
                 type = 'number'
                 placeholder='Añade Cantidad , ej. 300 €'
             />

           </div>   
           <div className='campo'>
             <label htmlFor='categoria'>categoria</label>
             <select
                 id='categoria'
             >
                 <option value='' >--Seleccione--</option>
                 <option value='ahorro' >Ahorro</option>
                 <option value='comida' >Comida</option>
                 <option value='Casa' >Casa</option>
                 <option value='gastos' >Varios</option>
                 <option value='ocio' >ocio</option>
                 <option value='salud' >Salud</option>
                 <option value='suscripciones' >suscripciones</option>
             </select>
            </div>
            <input
                type='submit'
                value='Añadir Gasto'
            />  
          </form>
    </div>
  )
}



export default Modal