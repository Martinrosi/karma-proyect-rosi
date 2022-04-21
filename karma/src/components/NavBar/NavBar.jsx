import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css';
function NavBar(props) {
    return (
        <nav>
            <a className='inicio' href='#'><img src="/img/karma1.png" width={150} /></a>
            <div className='menu'>
                <ul>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul> 
             <CartWidget />
            </div>
            
            
        </nav>

        
    );
}

export default NavBar;