import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";
import '../css/Jobs.css'


const Jobs1 = () => {
  return (
    <div className="fondo1">
        <Navbar/>
        <header className="studies-header">
            <div className="container-jobs2"> 
              <h1 className='title-jobs2'>Jinx Arcane</h1>
              <div className='info-container-job2'>
                <p>Page created to show information about the Jinx character from the Netflix series based on the League of Legends game. The page has two interfaces made with responsive, the character of Jinx will be found in the first interface and the character of Vi in the second interface  </p>
                <a className='target-a' href="https://ovalleda.github.io/Personaje-Kuepa.github.io/jinx.html" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs1