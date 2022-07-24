import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')


    const handlePresupuesto = (e) => {
      e.preventDefault();
      if (!presupuesto || presupuesto >= 0) {
        setMensaje('No es un presupuesto valido')
        setIsValidPresupuesto(true)
        return
      }
      setMensaje('')
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label>Definir Presupuesto</label>
          
          <input 
            className="nuevo-presupuesto"
            type="text"
            placeholder="añade tu presupuesto"
            value={presupuesto}
            onChange={e=> setPresupuesto(Number(e.target.value))}
          />
        </div>
        
        <input type='submit' value='Añadir' />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto