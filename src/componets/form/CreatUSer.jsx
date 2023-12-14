import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './CreateUser.css'
const CreatUSer = () => {
    const [data, setData] = useState()
    const {handleSubmit, register, reset}=useForm()
   
    useEffect(() => {
         const url="http://localhost:5010/v1/user"
    axios.post(url, data)
                .then(res=> console.log(res))
                .catch(err=>console.log(err))
    }, [data]);
    

    const submite=(e)=>{ setData(e)}
    console.log(data);
  return (
    <div className='cardFrom'>
        <div><h3>Crear usuario</h3></div>
        <form onSubmit={handleSubmit(submite)}>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">nombre</label>
                <input type="text" id='name'{...register('name')} />
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">apellido</label>
                <input type="text" id='lastName'{...register('lastName')}/>
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">email</label>
                <input type="email" id='email'{...register('email')} />
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">numero de cuenta</label>
                <input type="number" id='num_Empleado' {...register('num_Empleado')}/>
            </div>
            <button>send</button>
        </form>
    </div>
  )
}

export default CreatUSer