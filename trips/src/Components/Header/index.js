import {Link} from 'react-router-dom';

import logo from '../../Assets/logo.svg';
import './style.css';

export default function Header() {
    return(
        <header className="container">
           <Link>
               <img className="logo" src={logo} alt="Logo Projeto"/>
           </Link>

           <Link className="reserva" to="/reservas">
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>0 Reservas</span>
                </div>
           </Link>
        </header>
    );
}