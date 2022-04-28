import React from "react";
import './Items.css';

function Item({ item }) {
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
                <button className="button1">Informacion</button>
                <button className="button2">Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Item