import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs6 = () => {
  return (
    <div className="fondoabout">
        <Navbar/>
        <header className="studies-header">
        <div className="container-jobs2">
            <h1 className='title-anima'>Animalandia</h1>
            <div className='info-container-anima'>
                <p>Project created for the frontend web development course in layout, structuring and functionality based on the company Forja.
                A simulation of a web application is made to help health personnel to search for users and keep a vaccination record. </p>
                <a className='target-a' href="https://ovalleda.github.io/animalandia-bootstrap/" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs6