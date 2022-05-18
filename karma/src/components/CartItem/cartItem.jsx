import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import './cartItem.css'

function CartItem({ item }) {
    const cartCtx = useContext(CartContext)
  return (
    <>  <div className='box'>
      
      <div className='quitar'>
            <button  onClick={() => cartCtx.removeProduct(item.id)}>Quitar Producto</button>
        </div>
        <div className='cantidad'>
        <p>{ item?.quantity } Items</p>
        </div>
      <div className='cart-item'>
            <div>
            <img src={ item?.img } alt="imagen producto" width={120} />
            </div>
            <p className='titulo'>{ item?.name }</p>
            <p className='price'> ${ item?.price }</p>
        </div>
        </div>
        <hr></hr>
        
    </>
  )
}

export default CartItem