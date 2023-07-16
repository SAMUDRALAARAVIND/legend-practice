
// interface IUser {
//     name: string;
//     age?: ;
// }
// enums => standard values 

// my booking (PENDING, CANCELED, CONFIRMED)
/**
 * type
 * interface keyword 
 * | used to have multiple types
 * ? optional
 */

// interface IAddress {
//     city: string;
//     state: string;
//     pincode?: number;
// }

// interface IUser { 
//     name: string;
//     age: number;
//     address: IAddress;
// }

// let u1: IUser = {
//     name: "Aravind",
//     age:22,
//     address: {
//         city: "Warangal",
//         state: "TS",
//         pincode: 3483993
//     }
// }

// console.log(u1)


// interface IUser {
//     name: string;
//     friends: Array<string | number>; // Array<string>
// }

// let user: IUser = {
//     name: "aravind",
//     friends: [ "shriram" , "musakn", 29]
// }
import { observable } from "@legendapp/state";
import {observer, useSelector} from "@legendapp/state/react"
import React, { useState } from "react";

interface IHotel {
    name: string;
    price: number; // price per room
    rating: number; // out of 5 star
}

let hotels = [
    {
        name: "Hotel 1",
        price: 2500,
        rating: 4.5
    },
    {
        name: "Hotel 2",
        price: 5000,
        rating: 5
    },
    {
        name: "Hotel 3",
        price: 2500,
        rating: 4.5
    },
    {
        name: "Hotel 4",
        price: 1900,
        rating: 4.1
    }
]

const hotelsState = observable()

// const HoteslList = () => {
//     return <>
//         {
//             hotels.map((hotel, idx) => {
//                 return <div key={idx}>{`${hotel.name} , Price: ${hotel.price} , Rating: ${hotel.rating}`}</div>
//             })
//         }
//     </>
// }

let obs = observable({
    age: 22, 
    count: 0,
    address: {
        city: "Warangal"
    }
});


// let addProxy = (value) => {
//     return {
//         get: () => {
//             return value;
//         },
//         set: (newValue) => {
//             // sets this newValue
//         }
//     }
// }

// // let addGetFunc = (obj) => { 
// //     // {a: 10, b: 20, address: { city: }}
// //     let observableObject = {} ;
// //     for(let i in obj){
// //         observableObject[i] = addProxy(obj[i])
// //     }

// //     /* observableObject = {
// //         a: {
// //             get: Function,
// //             set: Function,
// //         },
// //         b: {
// //             get: Function,
// //             set: Function
// //         },
// //         address: {
// //             get: Function,
// //             set: Function
// //         },
// //         address: {
// //             city: {
// //                 get: Function,
// //                 set: Function
// //             }
// //         }
// //     }
// //     */
// //     return observableObject;
// // }

// peek and get methods are used to access the value of observable from the memory

// console.log(obs.address.city.peek()) // "Warangal"
// obs.address.city.set("Hyderabad");
// console.log(obs.address.city.peek()) // Hyderabad

let count = observable(0);

const Test = observer(() => {
    const inc = () => {
        count.set(old => old+1);
        console.log(count.peek())
    }

    return <>
        <h1>{count.get()}</h1>
        <button onClick={inc}>Increment</button>
    </>
});

const Test2 = observer(() => {
    console.log(count.get())
    console.log("test2 render")
    return <p>{count.peek()}</p>
});


export const Component = () => {
    // const onChangePrice = (e) => {
    //     let selectedValue = e.target.value 
    //     hotels = []
    // }

    return <div>
        {/* <select>
            <option value="">Sort By rating</option>
            <option value="5">5+ star</option>
            <option value="4">4+ star</option>
        </select>
        <select onChange={onChangePrice}>
            <option value="">Sort by price</option>
            <option value="2000">{`< 2000`}</option>
            <option value="4000">{` < 4000`}</option>
        </select> */}
        {/* <HoteslList /> */}
        <Test />
        <Test2 />
    </div> ;
}