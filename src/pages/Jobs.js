import '../css/Jobs.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from 'react-router-dom';



function Jobs(){

    return(
        <div className="fondoabout">
            <Navbar/>
            <header className="jobs-header">
                <div className="container-jobs">

                <div class="section1">
              <div class="property-card">

                  <div class="property-image im1">
                  </div>
                <div class="property-description">
                  <h5> Jinx Arcane </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.</p>
                  <Link to="/jobs/arcane" className='item2'>More info</Link>
                </div>
              </div>
              </div>
              <div class="section2">
              <div class="property-card">

                  <div class="property-image im2">
                  </div>
                <div class="property-description">
                  <h5> Studio Ghibli Movies </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.</p>
                  <Link to="/jobs/ghibli" className='item2'>More info</Link>
                </div>
              </div>
              </div>
              <div class="section3">
              <div class="property-card">

                  <div class="property-image im3">
                  </div>
                <div class="property-description">
                  <h5> Coraje </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.</p>
                  <Link to="/jobs/coraje" className='item2'>More info</Link>
                </div>
              </div>
              </div>
              <div class="section4">
              <div class="property-card">

                  <div class="property-image im4">
                  </div>
                <div class="property-description">
                  <h5> Mil Huellitas </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. </p>
                  <Link to="/jobs/huellitas" className='item2'>More info</Link>
                </div>
              </div>
              </div>
              <div class="section5">
              <div class="property-card">

                  <div class="property-image im5">
                  </div>
                <div class="property-description">
                  <h5> Forja </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.</p>
                  <Link to="/jobs/forja" className='item2'>More info</Link>
                </div>
              </div>
              </div>
              <div class="section6">
              <div class="property-card">

                  <div class="property-image im6">
                  </div>
                <div class="property-description">
                  <h5> Animalandia </h5>
                  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.</p>
                  <Link to="/jobs/animalandia" className='item2'>More info</Link>
                </div>
              </div>
              </div>
                </div>
                <Footer></Footer>
            </header>
        </div>
    );
}

export default Jobs;