import React, { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Addres from './Addres'
import Dispres from './Dispres'
import Updres from './Updres'
import Ct from './Ct'

const App=()=> {
  let[data,setData]=useState()
  return (
    <BrowserRouter>
    <Nav/>
    <Ct.Provider value={{data:data,fun:setData}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Addres/>}/>
      <Route path='/disp' element={<Dispres/>}/>
      <Route path='/update' element={<Updres/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
    
  )
}

export default App
