import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./box.css";

const ItemListContainer = (greeting) => {
  return (
    <div className='contenedor'>
      <ItemCount stock={10} initial={1} />
    </div>
  )
}

export default ItemListContainer

