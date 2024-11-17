import React from 'react'
import './App.css'
import Digital from './Components/Digital/Digital'
import Branding from './Components/Branding/Branding'
import Custom from './Components/Custome/Custom'
import Partner from './Components/Partners/Partner'
import Header from './Components/Header/Header'


const App = () => {
  return (
    <>
    <Header/>
    <Digital num='1'/>
    <Branding num='2'/>
    <Custom num='3'/>
    <Partner num='4'/>
    </>
  )
}

export default App
