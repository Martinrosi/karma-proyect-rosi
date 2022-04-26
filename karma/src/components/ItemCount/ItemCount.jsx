import React, {useState} from 'react'
import "./itemCount.css";

function ItemCount({ stock, initial,  onAdd }) {
    const [count, setCount] = useState(initial);
  
    function mas () {
      if (count < stock){
        setCount (count +1);
      }
    }
    function menos (){
      if (count > 0){
        setCount (count - 1);
      }
    }

    return (

      <div className='Contador'>
          <div className='masmenos'>
              <button onClick={() => menos()} >Quitar</button>
              <input value={count} />
              <button onClick={() => mas()}>Agregar</button>
          </div>
        <button className='acarrito' onClick={() => (count <= stock) && onAdd()}>Agregar al carrito</button>
      </div>
    )
  }
  
  export default ItemCount