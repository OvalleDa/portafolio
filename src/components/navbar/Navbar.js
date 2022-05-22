import { Link } from 'react-router-dom';
import '../navbar/Navbar.css'

function Navbar(){
    return(
        <nav>
            <Link to="/home" className='item'>
            <i className="fa-solid fa-house"></i> Home
            </Link>

            <Link to="/about-me" className='item'>
            <i className="fa-solid fa-icons"></i> About Me
            </Link>

            <Link to="/skills" className='item'>
            <i className="fa-solid fa-pen"></i> Skills
            </Link>

            <Link to="/studies" className='item'>
            <i className="fa-solid fa-landmark"></i>Studies
            </Link>

            <Link to="/jobs" className='item'>
            <i className="fa-solid fa-landmark"></i>Jobs
            </Link>

        </nav>

    );
}

export default Navbar;