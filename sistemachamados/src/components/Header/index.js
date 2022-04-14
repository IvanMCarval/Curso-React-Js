import './header.css';
import avatar from '../../assets/avatar.png';

import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

export default function Header() {
    const {user} = useContext(AuthContext);

    return(
        <div className="sideBar">
            <div>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto Avatar"/>
            </div>

            <Link to="/dashboard">
                <FiHome color="#FFF" size={24}/>
                Chamados
            </Link>
            <Link to="/customers">
                <FiUser color="#FFF" size={24}/>
                Clientes
            </Link>
            <Link to="/profile">
                <FiSettings color="#FFF" size={24}/>
                Configurações
            </Link>
        </div>
    );
}