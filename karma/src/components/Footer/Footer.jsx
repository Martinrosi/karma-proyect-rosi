import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

function footer() {
  return (
    <footer>
        
            <div className='menu'>
            <NavLink to='/' className='img'><img src="/img/karma1.png" width={100} /></NavLink>
                <p className='p'>Todos los derechos reservados 2022</p>
                <ul>
                    <li><NavLink to='/'>Productos</NavLink></li>
                    <li><NavLink to='/Productos/Novela'>Novelas</NavLink></li>
                    <li><NavLink to='/Productos/Ficcion/'>Ficcion</NavLink></li>
                    <li><NavLink to='/Productos/Juvenil'>Juvenil</NavLink></li>
                </ul> 
                
            </div>
            
    </footer>
    )
}

export default footer