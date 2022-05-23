import '../css/Studies.css'
import Navbar from "../components/navbar/Navbar";


function Studies(){
    return(
        <div className="fondoabout">
            <Navbar/>
            <header className="studies-header">
                <div className="container-studies">
                <div class="card card-1">
    <img src="https://2.bp.blogspot.com/-F3NhF-j-JRo/WJzWfE7YYjI/AAAAAAAACfo/4uOv_ZljV5UjlIWkJbuATfWd9_n2xTcmwCLcB/s1600/logo.gif" alt="Person" class="card__image"/>
    <p class="card__name">Colegio Nestor Forero </p>
    <div class="grid-container">

      <div class="grid-child-followers">
        Bachiller Acádemico
      </div>

    </div>

    <button class="btn draw-border">More Info</button>


  </div>
  <div class="card card-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/LogoEntidad2.png" alt="Person" class="card__image"/>
    <p class="card__name">UCM de Cundinamarca</p>
    <div class="grid-container">


      <div class="grid-child-followers">
        Bacteriología 
      </div>

    </div>
    <button class="btn draw-border">More Info</button>

  </div>
  <div class="card card-3">
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCBhw0C4l-Q/company-logo_200_200/0/1589311920034?e=2147483647&v=beta&t=mCjyQt7SjoLmKH4S2qvpiZOszS0Ox7ihaUAYNYR_RYE" alt="Person" class="card__image"/>
    <p class="card__name">Kuepa EduTech</p>
    <div class="grid-container">



      <div class="grid-child-followers">
        Tecnólogo en Digitación
      </div>

    </div>

    <button class="btn draw-border">More Info</button>

  </div>
                </div>
            </header>
        </div>
    );
}

export default Studies;