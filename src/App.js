import fotoperfil from './img/fotoperfil.png';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <div className="container">
        <div className="title1"><h1>Developer Web</h1></div>
        <img src={fotoperfil} className="App-logo" alt="logo" />
        <div className="title2"><h2>Daniela Ovalle</h2></div>
      </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
