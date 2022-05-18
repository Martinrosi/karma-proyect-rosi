import { createContext, useState } from "react";

const CartContext = createContext({
    products: []
});


export const CartContextProvider = ({children}) => {
  
    const [productList, setProductList] = useState([]);
    const addProduct = (product) => {
        const repeatItemIndex = productList.findIndex(item => item.id === product.id)
            if (repeatItemIndex !== -1) {
                setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
            } else {
                setProductList([product, ...productList]);
            }
    }

    const removeProduct = (id) => {
        setProductList(productList.filter((item) => item.id !== id));
    }
    const clear = () => {
        setProductList([])
    }

    const isInCart = (id) => {
        return productList.some((item) => item.id === id);
    }

    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    const getTotalPrice = () => {
        return productList.reduce((total, value) => {
            return total + value.price*value.quantity
        }, 0)
    }
    return (
    <CartContext.Provider value={{
        products: productList,
        addProduct: addProduct,
        removeProduct: removeProduct,
        clear: clear,
        isInCart: isInCart,
        getCartQuantity: getCartQuantity,
        getTotalPrice: getTotalPrice
    }}>
        {children}
    </CartContext.Provider>
    )
}



export default CartContext;