import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs5 = () => {
  return (
    <div className="fondo5">
        <Navbar/>
        <header className="studies-header">
        <div className="container-jobs2">
            <h1 className='title-forja'>Forja Empresas</h1>
            <div className='info-container-forja'>
                <p>Project created for the frontend web development course in layout, structuring and functionality based on the company Forja.
                A simulation of a web application is made to help health personnel to search for users and keep a vaccination record. </p>
                <a className='target-a' href="https://ovalleda.github.io/forja-empresas/" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs5