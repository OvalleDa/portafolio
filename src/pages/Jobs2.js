import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs2 = () => {
  return (
    <div className="fondo0">
        <Navbar/>
        <header className="studies-header">
            <div className="container-jobs2">
            <h1 className='title-ghibli'>Studio Ghibli Movies</h1>
            <div className='info-container-ghibli'>
                <p>Website that shows the movies made by the Japanese animation studio called Studio Ghibli, thus showing the cover of the movies with a small review and an additional link with their respective trailer. The page is currently in the process of design and creation, but you can see a progress in the link.  </p>
                <a className='target-a' href="https://studio-ghibli-movies-sigma.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs2