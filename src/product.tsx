import { observer } from "@legendapp/state/react";
import React, { useContext, useState } from "react"
import { CartContext } from "./ProductManagement";

interface Product { 
    name: string;
    price: number;
    productId: number;
}

console.log("edit for testing")

export const Product: React.FC<{product: Product}> = ({product}) => {
    const [count, setCount] = useState(1);
    const cartRef = useContext(CartContext);

    const add = () => {
        let payload = {...product, quantity: count}; 
        cartRef.addProduct(payload)
    }

    return (
        <div style={{border: "2px solid blue"}}>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <div>{count}</div>
            <button onClick={() => setCount(old => old+1)}>inc</button>
            <button onClick={() => setCount(old => old-1)}>dec</button>
            <button onClick={add}>Add This Product</button>
        </div>
    );
} 


export const Cart = observer(() => {
    const cartRef = useContext(CartContext);

    const cartList = cartRef.obsCart.get();

    console.log(cartList)
    
    return <>
        <h1>{cartList.length}</h1>
    </>
});