import Navbar from "../components/navbar/Navbar";
import '../css/home.css';
import '../img/fotoperfil.png'


function Home(){
    return(
        <div className="fondo" >
            <Navbar/>
            <main>
                <div className="title1"><h1>Developer Web</h1></div>
                <h3></h3>
                <div className="title2"><h2>Daniela Ovalle</h2></div>

            </main>
        </div>
    );
}

export default Home;