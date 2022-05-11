import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../context/cart-context";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

function ItemDetail({ item }) {
    const [cantidadProductos, setCantidadProductos] = useState(null);
    const cartContxt = useContext(CartContext);

    
    function addHandler(quantityToAdd) {
        setCantidadProductos(quantityToAdd)
        cartContxt.addProduct(item)
    }

    return (
        <div className="itemDetail">
            <div className="imagen">
                <div className="imagenDetail">
                    <img src={ item?.img } alt="imagen producto" width={350} />
                </div>
            </div>
            <div className="info">
                <div className="infoContainer">
                    <h2>{ item?.name }</h2>
                    <h3>{ item?.autor }</h3>
                    <div className="resumen">
                        <h4>{ item?.resume }</h4>
                    </div>
                    <p>$ { item?.price }</p>

                   <div className="countContainer" >
                       {cartContxt.products.length ?
                        <button className="button1" onClick={() => console.log(cartContxt)}><Link to='/cart'>Finalizar la compra ({ cantidadProductos } item/s)</Link></button> :
                        <ItemCount initial={0} stock={10} onAdd={addHandler} />  
                    }
                    </div>
                </div>
            </div>
       </div>
    )
}
export default ItemDetail;