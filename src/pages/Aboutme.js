import Navbar from "../components/navbar/Navbar";
import '../css/Aboutme.css'
import photo from '../img/aboutphoto.png';
import Footer from '../components/footer/Footer';

function Aboutme(){
    return(
        <div className="fondoabout">
            <Navbar/>
            <header className="aboutme-header">
                <div className="container-about">
                <img src={photo} className="hamster"></img>
                   <div className="infor">
                        <p>I am a curious and creative person, determined to be in constant learning. I like web design, technology and marketing.  
                        I am currently a student of a technology specialized in web design, but in my spare time I study UX / UI design.
                        </p>
                        <p>
                        I have had the opportunity to study for more than a year different tools such as figma, Html, Css, Javascript, Python, Java, React, Adobe Illustrator, Photoshop, among others.
                        </p>
                    </div>
                </div>
            </header>
            <Footer></Footer>
        </div>
    );
};

export default Aboutme;