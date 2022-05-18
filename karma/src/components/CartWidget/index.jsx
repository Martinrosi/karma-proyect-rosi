import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import './cartWidget.css';

const CartWidget = () => {
  const cartCtx = useContext(CartContext)
  return (
    <div>
      <Link to='/cart'><img className='png' src='/img/carrito.png' width={35} /></Link>
      <div className='fondo' >
         <p className='numero'>{cartCtx.getCartQuantity()}</p>
      </div>
     

      </div>
    
  )
}

export default CartWidget