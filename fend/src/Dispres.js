import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Dispres=()=> {
  let navigate=useNavigate()
  let[data,setData]=useState([])
  let [d,setD]=useState(true)
  useEffect(()=>{
    axios.get('http://localhost:5000/getall').then((res)=>{
      setData(res.data)
    })
  },[d])
  let del=(hno)=>{
    axios.delete(`http://localhost:5000/del/${hno}`).then(()=>{
      setD(!d)
    })
  }
  let obj=useContext(Ct)
  let edit=(item)=>{
    obj.fun(item)
    navigate("/update")
  }
  return (
    <div>
      <table border={1}>
        <tr><th>Hno</th><th>Name</th><th>DOB</th><th>Phno</th><th>Maths</th> <th>Physics</th><th>Chemistry</th><th>Hindi</th><th>English</th></tr>
        {
          data.map((item)=>{
            return(<tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{new Date(item.dob).toLocaleDateString()}</td>
              <td>{item.phno}</td>
              <td>{item.maths}</td>
              <td>{item.physics}</td>
              <td>{item.chemistry}</td>
              <td>{item.hindi}</td>
              <td>{item.english}</td>
              <td><button onClick={()=>edit(item)}>edit</button></td>
              <td><button onClick={()=>del(item._id)}>delete</button></td>
            </tr>)
          })
        }
      </table>
    </div>
  )
}

export default Dispres