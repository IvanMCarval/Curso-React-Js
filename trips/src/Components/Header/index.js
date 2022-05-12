import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../Assets/logo.svg';
import './style.css';

export default function Header() {
    const reserveSize = useSelector(state => state.reserve);

    return(
        <header className="container">
           <Link to="/">
               <img className="logo" src={logo} alt="Logo Projeto"/>
           </Link>

           <Link className="reserva" to="/reservas">
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>{reserveSize.length} Reservas</span>
                </div>
           </Link>
        </header>
    );
}