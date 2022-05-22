import React from 'react'
import { Link } from 'react-router-dom';
import  '../css/Prueba.css'

const Prueba = () => {
  return (
    <div className='fondo-prueba'>
        <div className='container-prueba'>
            <h1 className='title-prueba'>Hello!</h1>
            <Link to="/home" className='botton-start'></Link>
        </div>

    </div>
  )
}

export default Prueba;