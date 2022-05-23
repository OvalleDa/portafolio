import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs4 = () => {
  return (
    <div className="fondo4">
        <Navbar/>
        <header className="studies-header">
        <div className="container-jobs2">
            <h1 className='title-huellitas'>Fundación Mil Huellitas</h1>
            <div className='info-container-huellitas'>
                <p>Group project created in the frontend web development course, based on a fictional animal foundation that helps make rescued pets visible, providing useful information on the care and prevention of animal abandonment.  </p>
                <a className='target-a' href="https://studio-ghibli-movies-sigma.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
            <Footer></Footer>
        </header>
    </div>
  )
}

export default Jobs4