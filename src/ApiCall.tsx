import { observable } from "@legendapp/state";
import { useEffect } from "react";
import {observer} from "@legendapp/state/react"
import React from "react";

interface IProduct {
    name: string;
    price: string;
    productId: number;
}

class ProductsModel {
    obsProductsList;
    constructor() {
        this.obsProductsList = observable<IProduct[]>([]);
    }

    fetchProducts = async () => {
        // makes the network call and gets the list from the server
        const endpoint = `https://demo7268958.mockable.io/stduents` ;
        const response = await fetch(endpoint, { method: "GET" })
        const result = await response.json();
        this.obsProductsList.set(result);
    }
}

const productsModel = new ProductsModel();

export const ApiCall = observer(() => {

    const productsList = productsModel.obsProductsList.get();

    useEffect(() => {
        productsModel.fetchProducts();
    }, [])

    if(productsList.length === 0) {
        return <h1>Loading ...</h1>
    }

    return <div>
        {
            productsList.map((product) => {
                return <div key={product.productId}>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>ID: {product.productId}</p>
                    </div>
            })
        }
    </div>

});