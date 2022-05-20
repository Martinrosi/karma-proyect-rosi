import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import './NavBar.css';

function getCategories() {
    const db = getFirestore();

    const itemCollection = collection(db, 'items');

    return getDocs(itemCollection);
}

function NavBar(props) {

    //const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     getCategories()
    //         .then(snapshot => {
    //             const categories = snapshot.docs.map(doc => doc.data().category);
    //             setCategories(categories);
    //         })
    // }, [])


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