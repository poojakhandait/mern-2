import React, { useState } from 'react'
import axios from 'axios'
  

const Home=()=> {
  let [hno,setHno]=useState()
  let [res,setResult]=useState()
  let [err,setErr]=useState("")

  let fun=(e)=>{
    setHno(e.target.value)
  }

  let getres=()=>{
    axios.get(`http://localhost:5000/getres/${hno}`).then((res)=>{
      if(res.data)
      {
        setResult(res.data)
        setErr("")
      }
      else{
        setErr("check Hno")
        setResult(null)
      }
      setHno("")
 
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <div>
        {err!=""&&<div>{err}</div>}
        <input type='text' placeholder='enter hno' onChange={fun} value={hno}/>
        <button onClick={getres}>Get Result</button>
      </div>
      {res!=null &&<table border={1}>
        <tr>
          <th>HNO</th>
          <td>{res._id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{res.name}</td>
        </tr>
        <tr>
          <th>DOB</th>
          <td>{new Date(res.dob).toLocaleDateString()}</td>
        </tr>
        <tr>
          <th>Phno</th>
          <td>{res.phno}</td>
        </tr>
        <tr>
          <th>Maths</th>
          <td>{res.maths}</td>
        </tr>
        <tr>
          <th>Physics</th>
          <td>{res.physics}</td>
        </tr>
        <tr>
          <th>Chemistry</th>
          <td>{res.chemistry}</td>
        </tr>
        <tr>
          <th>Hindi</th>
          <td>{res.hindi}</td>
        </tr>
        <tr>
          <th>English</th>
          <td>{res.english}</td>
        </tr>
      </table>}
    </div>
  )
}

export default Home