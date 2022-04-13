import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import './header.css';

export default function Header() {
    const reserveSize = useSelector(state => state.reserve);

  return (
    <header className='container'>
        <Link to="/">
            <img className='logo' src={logo}/>
        </Link>

        <Link className='reserva' to="/reservas">
            <div>
                <strong>Minhas reservas</strong>
                <span>{reserveSize.length} Reservas</span>
            </div>
        </Link>
    </header>
  )
}
