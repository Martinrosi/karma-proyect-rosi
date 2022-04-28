import React from "react";
import Items from "../Item/Items";
import "./ItemList.css"; 

function ItemList({ items }) {
    return (
        <div className="item-list">
            {items.map(item => <Items item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList