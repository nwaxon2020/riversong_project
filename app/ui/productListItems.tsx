"use client"

import { useState } from "react"

export default function ProductListItems(){

    // interface productz{
    //     id: number,
    //     name: string,
    //     img: string,
    //     price: string,
    //     qty: number,
    //     qty_left: number
    // }

    const productListItems = [
        {
            id: 1,
            name: "River Song",
            img: "/riversong_earpod2.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 2,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 3,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 4,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 5,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 6,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 7,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "5,000",
            qty: 5,
            qty_left: 3,
        },
        {
            id: 8,
            name: "River Song",
            img: "/riversong_earpod.jpg", 
            price: "555,555",
            qty: 5,
            qty_left: 3,
        },
    ]

    const[clicked, setClicked] = useState (false)
    function handleClicked(){
        setClicked(true)
    }

    return(
        <div className="p-2 md:p-10 my-5 md:my-10 grid grid-cols-2 lg:grid-cols-4 justify-items-center items-start">
            <h2 className="justify-self-start mt-10 mb-[-20px] md:mb-[-3rem] px-2 md:px-10 py-5 text-[#F46B27] font-extrabold col-span-2 md:col-span-4">Things You May Like</h2>
            {productListItems.map((prod)=>{
                return(
                    <div key={prod.id} className={"my-8 md:my-15 w-[10rem] md:w-72 shadow-lg rounded-b-lg"}>

                        <div className={`${clicked? "bg-[#F46B27]" : "bg-gray-600"} shadow-lg rounded-lg p-2 relative w-full h-full group overflow-hidden rounded-md`}>
                            <button onClick={()=> handleClicked} className="z-30 absolute top-0 right-4 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                            <img
                                src={prod.img}
                                alt={prod.name}
                                className="w-full h-full object-cover"
                            />                 
                        </div>
                        {/* Product info */}
                        <div className="mt-0 p-2 pt-0 relative">
                            <p className="text-gray-800 font-black font-mono">{prod.name}</p>
                            <p className="text-red-600 font-semibold font-[cursive]">Price:<span className="text-gray-500 font-light">&#8358;{prod.price}</span></p>
                            <small className="inlineblock md:absolute top-4 right-2 bg-white rounded-sm p-1">Qty: <span className="text-red-500">{prod.qty_left}/{prod.qty}</span></small>
                        </div>
                    </div>
                )
            })}

        </div>
        
        
    )

}
