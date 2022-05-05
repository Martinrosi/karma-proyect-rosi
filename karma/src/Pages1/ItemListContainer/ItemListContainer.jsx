import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/Itemlist'
//import ItemCount from '../ItemCount/ItemCount';
import "./box.css";

// const ItemListContainer = (greeting) => {
//   return (
//     <div className='contenedor'>
//       <ItemCount stock={10} initial={1} />
//     </div>
//   )
// }

// export default ItemListContainer

function productos(category) {
  const myPromise = new Promise((resolve, reject) =>{
    const listaProductos = [
      {id: 1, name: "En el bosque", autor: "Alysaa Wees", category: 'Ficcion', price: 1930, img:"/img/inicio1.jpg"},
      {id: 2, name: "A Fuego Lento", autor: "Paula Hawkins", category: 'Ficcion', price: 2100, img:"/img/libro1.jpg"},
      {id: 3, name: "Al Final Mueren Los Dos", autor: "Adam Silvera", category: 'Novela', price: 2050, img:"/img/libro24.jpg"},
      {id: 4, name: "Nosotros En La Luna", autor: "Alice Kellen", category: 'Ficcion', price: 2250, img:"/img/oferta1.jpg"},
      {id: 5, name: "El Engaño", autor: "Kiersten White", category: 'Policial', price: 1700, img:"/img/libro8.jpg"},
      {id: 6, name: "Lore", autor: "Alexandra Bracken", category: 'Ficcion', price: 1900, img:"/img/libro13.jpg"},
      {id: 7, name: "Una Luz Fuerte y Brillante", autor: "Viviana Rivero", category: 'Novela', price: 1800, img:"/img/libro18.jpg"},
      {id: 8, name: "1984", autor: "George Orwell", category: 'Ficcion', price: 2500, img:"/img/libroPortada.jpg"},
      {id: 9, name: "Harry Potter: y la piedra filosofal", autor: "J.K. Rowling", category: 'Juvenil', price: 2300, img:"/img/libro22.jpg"},
      {id: 10, name: "El Amor Cae Del Cielo", autor: "Esther Sanz", category: 'Novela', price: 1950, img:"/img/inicio3.jpg"},
      {id: 11, name: "Miss Marple y Trece Problemas", autor: "Agatha Christie", category: 'Policial', price: 1900, img:"/img/inicio2.jpg"},
      {id: 12, name: "Un Marido Inventado", autor: "Julia Quinn", category: 'Novela', price: 2050, img:"/img/libro 6.jpg"},
      {id: 13, name: "Crimenes Sorprendentes De Asesinos En Serie", autor: "Ricardo Canaletti", category: 'Policial', price: 2000, img:"/img/libro2.jpg"},
      {id: 14, name: "Escape", autor: "Dross", category: 'Ficcion', price: 1950, img:"/img/libro3.jpg"},
      {id: 15, name: "Heartstopper", autor: "Alice Oseman", category: 'Juvenil', price: 2100, img:"/img/libro4.jpg"},
      {id: 16, name: "Brota", autor: "Guillermina Lopata", category: 'Novela', price: 1700, img:"/img/libro5.jpg"},
    ];
    const productsFiltered = category ? listaProductos.filter(p => p.category === category) : listaProductos;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
} 

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    productos(categoryId)
      .then(res => {
        setProducts(res);
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