import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
const Moves = () => {
    const [data, setData] = useState()
    const {handleSubmit, register, reset}=useForm()
   
    useEffect(() => {
         const url="http://localhost:5010/v1/moves"
    axios.post(url, data)
                .then(res=> console.log(res))
                .catch(err=>console.log(err))
    }, [data]);
    

    const submite=(e)=>{ setData(e)}
    console.log(data);
  return (
    <div className='cardFrom'>
        <div><h3>Trabajos por mes</h3></div>
        <form onSubmit={handleSubmit(submite)}>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">role</label>
                <input type="text" list="drawfemails" id='role'{...register('role')} />
                <datalist id="drawfemails">
                    <option value="CHOFER">CHOFER</option>
                    <option value="CARGADOR">CARGADOR</option>
                    <option value="AUXILARES">AUXILARES</option>
                </datalist>
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">mes</label>
                <input type="number" id='mes'{...register('mes')}/>
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">Numero de entregas por mes</label>
                <input type="number" id='num_entregas'{...register('num_entregas')} />
            </div>
            <div className='inpForm'>
                <label className='labelForm' htmlFor="">Dias que se trabajo por mes: </label>
                <input type="number" id='diasTrabMes' {...register('diasTrabMes')}/>
            </div>
            <button>send</button>
        </form>

    </div>
  )
}

export default Moves