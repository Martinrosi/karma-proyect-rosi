import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/cartItem';
import CartContext from '../../context/cart-context';
import "./Cart.css";

function Cart() {
  const cartCtx = useContext(CartContext);
  return (
   <div className='cart'>
     {cartCtx.products.map(p => <CartItem item={p} key={p.id} />)}
     {cartCtx.products.length !== 0?
        <div className='final-cart'>
         <p className='cantidadP'>Cantidad de productos: {cartCtx.getCartQuantity()}</p> 
         <hr />
          <p className='final'>Precio Final: ${cartCtx.getTotalPrice()}</p>
          <button className='button2'>Finalizar la compra</button>
        </div> :
        <>
            <h2>El carrito esta vacío</h2>
            <button><Link to='/'>Compra algo</Link></button>

        </>
    }
   </div>
  )
}

export default Cart