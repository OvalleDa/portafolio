import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs3 = () => {
  return (
    <div className="fondo6">
        <Navbar/>
        <header className="studies-header">
        <div className="container-jobs2">
            <h1 className='title-courage'>Courage the Cowardly Dog</h1>
            <div className='info-container-courage'>
                <p>Website dedicated to the animated series of the 2000's, Courage the Cowardly Dog, the page shows all the characters of the series, the main and secondary, detailing their stories and their appearance in the chapters of the series. </p>
                <a className='target-a' href="https://ovalleda.github.io/corajeresponsive.github.io/views/index.html" target="_blank">View page</a>
              </div>
            </div>
            <Footer></Footer>
        </header>
    </div>
  )
}

export default Jobs3