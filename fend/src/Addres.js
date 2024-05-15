import React, { useState } from 'react'
import axios from 'axios'

const Addres=()=> {
  let [data,setData]=useState({"_id":"","name":"","dob":"","phno":"","maths":"","physics":"","chemistry":"","hindi":"","english":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let add=()=>{
    axios.post('http://localhost:5000/add',data).then((res)=>{
      setMsg(res.data)
      setData({"_id":"","name":"","dob":"","phno":"","maths":"","physics":"","chemistry":"","hindi":"","english":""})
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
      <div>{msg}</div>
      <input type='text' placeholder='enter hno' name='_id' value={data._id} onChange={fun}/>
      <input type='text' placeholder='enter name' name='name' value={data.name} onChange={fun}/>
      <input type='date'name='dob' value={data.dob} onChange={fun}/>
      <input type='text' placeholder='enter phno' name='phno' value={data.phno} onChange={fun}/>
      <input type='text' placeholder='enter maths marks' name='maths' value={data.maths} onChange={fun}/>
      <input type='text' placeholder='enter physics marks' name='physics' value={data.physics} onChange={fun}/>
      <input type='text' placeholder='enter chemistry marks' name='chemistry' value={data.chemistry} onChange={fun}/>
      <input type='text' placeholder='enter hindi marks' name='hindi' value={data.hindi} onChange={fun}/>
      <input type='text' placeholder='enter english' name='english' value={data.english} onChange={fun}/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Addres