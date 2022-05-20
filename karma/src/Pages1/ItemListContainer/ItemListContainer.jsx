import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/Itemlist'
import CartContext from '../../context/cart-context';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import "./box.css";


function productos(category) {
  const db = getFirestore();

  const itemsCollection = collection(db, 'items');

  const q = category && query(

    itemsCollection,
    where('category', '==', category)
  );

  return getDocs(q || itemsCollection);
} 

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  //const cartContxt = useContext(CartContext);
  
  useEffect(() => {

    // const db = getFirestore()

    // const itemCollection = collection(db, 'items');

    // getDocs(itemCollection)
    //   .then (snapshot => {
    //     console.log(snapshot.docs.map(doc => { 
    //       return { ...doc.data(), id: doc.id }
    //     }));
    // })
    // .catch(
    //   err => console.log(err)
    // );
    productos(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));
      })
      .catch(err => {
        console.log(err);
        alert("ERROR");
      })
  }, [categoryId]);

  return (
    <div>
      <ItemList items={products} />
    </div>
  )
}

export default ItemListContainer 