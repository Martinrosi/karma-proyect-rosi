import React from 'react';
import './NavBar.css';
function NavBar(props) {
    return (
        <nav>
            <a className='inicio' href='#'><img src="/img/karma1.png" width={150} /></a>
            <ul>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>🛒</a></li>
            </ul>  
        </nav>
        
    );
}

export default NavBar;