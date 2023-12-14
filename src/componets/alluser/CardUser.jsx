import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import './CardUser.css'
const CardUser = () => {
  const [user, setUser] = useState()
  useEffect( () => {
    const URL = "http://localhost:5010/v1/user"
    axios.get(URL)
        .then( res => setUser(res.data) )
        .catch( err=> console.log(err) )
  }, [] ) 

console.log(user);
  return (
    <div>
        
        <div className='card-AllEmpleados'>
            <div>
              <h1>Lista de trabajadores</h1>
              <div >{user?.map((e,i)=> (
                <div className='card_user'>
                  <h1><span>Id: </span> {e.id}</h1>
                  <h1><span>Name: </span> {e.name} {e.lastName}</h1>
                  <h1><span>Email:</span> {e.num_Empleado}</h1>
                  <div className='card_user'>
                    <div>
                    <h1><span>Name: </span> {e.name} {e.lastName}</h1>
                    </div>
                  </div>
                </div>
              ) )}
              </div>
                
          
            </div>
        </div>
        
    </div>
  )
}

export default CardUser