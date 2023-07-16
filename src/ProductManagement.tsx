import React, {createContext, useRef} from "react";
import { Cart, Product, Products } from "./product";
import { observable } from "@legendapp/state";

const productsList = [
    {
        productId:1,
        name: "Iphone",
        price: 80000
    },
    {
        productId:2,
        name: "Earphones",
        price: 100,
    },
    {
        productId:3,
        name: "Charger",
        price: 1000
    },
    {
        productId:4,
        name: "Laptop Bag",
        price: 2000
    },
    {
        productId:5,
        name: "Earbud",
        price: 350
    }
]

interface ICart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

class CartModel {
    obsCart;
    constructor(){
        this.obsCart = observable<ICart[]>([]);
        // this.obsCart.set(oldList => ([...oldList, newProduct]))
    }

    addProduct = (newProduct) => {
        this.obsCart.set(oldProducts => {
            return [...oldProducts, newProduct];
        })
    }
}


export const CartContext = createContext();

export const ProductManagement = () => {
    const cartRef = new CartModel(); 

    return (
        <CartContext.Provider value={cartRef}>
            <Cart />
            {
                productsList.map((product, index) => {
                    return <Product key={index} product={product} />
                })
            }
        </CartContext.Provider>
    );
}

/*
1. create class for an observable object 
2. have methods inside this class to run business logic
3. create an instance of this class and make reference as a Provider value (context provider)
    so that all the children components will be able to use this refernce (by using useContext hook);
*/