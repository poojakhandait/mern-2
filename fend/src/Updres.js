import React, { useContext, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Updres=()=>{
  let obj=useContext(Ct)
  let[data,setData]=useState(obj.data)
  let navigate=useNavigate()
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let update=()=>{
    axios.put('http://localhost:5000/update',data).then(()=>{
      navigate("/disp")
    })

  }
  return (
    <div>
      {data ?<div>
        <input type='text' placeholder='enter hno' name='_id' value={data._id} onChange={fun} readOnly/>
      <input type='text' placeholder='enter name' name='name' value={data.name} onChange={fun}/>
      <input type='date'name='dob' value={data.dob.slice[0,10]} onChange={fun}/>
      <input type='text' placeholder='enter phno' name='phno' value={data.phno} onChange={fun}/>
      <input type='text' placeholder='enter maths marks' name='maths' value={data.maths} onChange={fun}/>
      <input type='text' placeholder='enter physics marks' name='physics' value={data.physics} onChange={fun}/>
      <input type='text' placeholder='enter chemistry marks' name='chemistry' value={data.chemistry} onChange={fun}/>
      <input type='text' placeholder='enter hindi marks' name='hindi' value={data.hindi} onChange={fun}/>
      <input type='text' placeholder='enter english' name='english' value={data.english} onChange={fun}/>
      <button onClick={update}>Update</button>

      </div>:<div>go to edit option</div>}
    </div>
  )
}

export default Updres