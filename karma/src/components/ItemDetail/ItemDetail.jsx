import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

function ItemDetail({ item }) {
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
                    <p>{ item?.price }</p>
                    <div className="countContainer">
                        <ItemCount initial={1} stock={10} onAdd={() => {}} />
                    </div>
                </div>
            </div>
       </div>
    )
}
export default ItemDetail;