import React, { useEffect, useState } from "react"; 
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css";

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {id: 1, title: "En El Bosque", autor: "Alyssa Wees", resume:"En un reino lejano, una princesa rebelde debe elegir entre la libertad y la muerte. Pero se somete a un hechizo y duerme. Y en sus sueños, sueña un plan de revolución. En el bosque, una bruja solitaria arranca pétalos de su corazón para concederles a los niños sus más grandes deseos. Hasta que un zorro llega para contarle una historia. Una historia que la hará sangrar. Y, en nuestro mundo, Rhea sueña. Sueña con una escalera. Sueña con una puerta. Y, detrás de esa puerta, sueña con ella misma. Muerta. Cuando poco a poco su familia comience a desaparecer y su vida se ponga de cabeza, los límites entre la realidad y el sueño se volverán cada vez más difusos. ¡Un fantasy oscuro y adictivo con la cadencia de un sueño!", price: "$1930", stock: 10, img:"/img/inicio1.jpg"};
    setTimeout(() => {
        resolve(item);
    }, 2000);
    });
    
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert("ERROR");
            });
    }, [])

    return (
        <div className="itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer