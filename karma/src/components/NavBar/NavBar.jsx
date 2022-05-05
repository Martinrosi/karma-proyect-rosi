import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';
function NavBar(props) {
    return (
        <nav>
            <NavLink to='/' className='inicio'><img src="/img/karma1.png" width={150} /></NavLink>
            <div className='menu'>
                <ul>
                <li><NavLink to='/'>Productos</NavLink></li>
                <li><NavLink to='/Productos/Novela'>Novelas</NavLink></li>
                <li><NavLink to='/Productos/Ficcion/'>Ficcion</NavLink></li>
                <li><NavLink to='/Productos/Juvenil'>Juvenil</NavLink></li>
            </ul> 
             <CartWidget />
            </div>
            
            
        </nav>

        
    );
}

export default NavBar;