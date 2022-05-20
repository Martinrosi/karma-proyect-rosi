import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import "./ItemDetailContainer.css";

function getItem(id) {
    const db = getFirestore()

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(snapshot => {
                setItem({ ...snapshot.data(), id: snapshot.id });
            })
            .catch(err => {
                console.log(err);
                alert("ERROR");
            });
    }, [id])

    return (
        <div className="itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer