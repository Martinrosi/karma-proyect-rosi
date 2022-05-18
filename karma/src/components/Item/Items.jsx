import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart-context";
import './Items.css';

function Item({ item }) {
    const cartCtx = useContext(CartContext)
    return(
        <div className="card">
           
            <div className="content">
                <div className="img-container">
                    <img className="product-img" src={ item.img } alt="imagen del prodcuto" width={200}/>
                </div>
            </div>
            <div  className="name">{ item.name }</div>
            <div  className="autor">{ item.autor }</div>
            <div className="precio">${ item.price }</div>
            <div className="button">
                <Link to={'/item/' + item?.id} ><button className="button1">Informacion</button></Link>
                
                <button className="button2" onClick={() => cartCtx.addProduct({quantity: 1, ...item})}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Item