import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './NominabyId.css'
const NominabyId = () => {
    const [user, setUser] = useState()
    const [id, setID] = useState(1)
    useEffect( () => {
        const URL = `http://localhost:5010/v1/user/data/${id}`
      axios.get(URL)
          .then( res => setUser(res.data) )
          .catch( err=> console.log(err) )
    }, [id] ) 
  
  console.log(user);
  console.log(id);
  return (
    <div className='card_main'>
      <div className='card_main'>
          <h3>id:{id}</h3>
          <h3>Número de empleado: <span className='bord_data'>{user?.numEmpleado}</span></h3>
          <h3>Nombre: <samp className='bord_data'>{user?.name} {user?.lastName}</samp></h3>
          <h3>Nomina: $<samp className='bord_data'>{user?.NominaMensual}</samp></h3>
          <h3>Role: <span className='bord_data'>{user?.role}</span></h3>
          <h3>Mes: <span className='bord_data'>{user?.mes}</span></h3>
          <h3>Cantidad de entregas: <span className='bord_data'>{user?.entregasDeMes}</span></h3>
      </div>
    <button>save </button>
    <input type="integer" value={id} placeholder="id" onChange={(e) => setID(e.target.value)}/>
 
    </div>
  )
}

export default NominabyId