import React from 'react'
import {ContactUs} from './ContactUs/ContacUs'
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <>  
     <Routes>
        <Route path="/" element = {<ContactUs /> }/>
     </Routes>
    </>
  )
}
