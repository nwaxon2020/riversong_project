"use client"
import Link from "next/link";
import { useState } from "react";
import ProductListItems from "./productListItems";

export default function ProductUi() {
    interface product{
        id: number,
        name: string,
        img_1: string,
        img_2: string,
        price: string,
    }

    const products = [
        {
            id: 1,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 2,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 3,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 4,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 5,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 6,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 7,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 8,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 9,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 10,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
        {
            id: 11,
            name: "Riversong Earpods",
            img_1: "/riversong_earpod2.jpg", 
            img_2: "/riversong_earpod.jpg", 
            price: "5,000",
        },
    ]

    const [clicked, setClicked] = useState(false)

  return (
    <div>
        {/* Advert youtube */}
        <div className="py-2 px-0 md:px-10 md:pb-10 md:pt-2">

            <iframe
                className="w-full h-60 md:h-[500px]"
                src="https://www.youtube.com/embed/nSe0_eW_5XU?autoplay=1&mute=1&loop=1&controls=0&playlist=nSe0_eW_5XU"
                title="Riversong Product Ads"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

        </div>



        {/* Phone Product lists 1 */}
        <div className="p-10 md:p-20 md:grid grid-cols-4 gap-4">
            {products.map((prod)=>{
                return(
                    <div key={prod.id} className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                        {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                        <div className="relative w-full h-64 group overflow-hidden rounded-md">
                            <img
                                src={prod.img_1}
                                alt={prod.name}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                            />
                            <img
                                src={prod.img_2}
                                alt={prod.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                            />
                        </div>

                        {/* Product info */}
                        <div className="mt-4 relative">
                            <Link href={`/product-list/${[prod.id]}`} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                            <p className="text-gray-800 font-black font-mono">{prod.name}</p>
                            <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;{prod.price}</span></p>
                            <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                        </div>
                    </div>
                )
            })}
        
        </div>

        <div className="bg-gray-900 md:bg-gray-300 p-4 mt-20 grid gap-0 justify-items-center items-center grid-cols-1 md:grid-cols-2">
            <div>
                <div className="md:hidden">
                    <iframe className="w-full h-auto md:w-[600px] h-[450px]" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31707.06926540197!2d3.325367691898957!3d6.599150457068119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15%20kodesoh%20street%2Coff%20obafemi%20Awolowo%20Road%2CIKEJA.!5e0!3m2!1sen!2sng!4v1748220274482!5m2!1sen!2sng" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="hidden md:block">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31707.06926540197!2d3.325367691898957!3d6.599150457068119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15%20kodesoh%20street%2Coff%20obafemi%20Awolowo%20Road%2CIKEJA.!5e0!3m2!1sen!2sng!4v1748220274482!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className="text-gray-400 md:text-gray-700"><span className="font-bold text-[goldenrod]">SHOP LOCATION:</span> No 15 kodesoh street,off obafemi Awolowo Road,IKEJA.</p>
            </div>
            <div className="w-full">
                <img className="md:hidden w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Z9b58wr-ZRisF-ObIkp1PnpDrki2DLg_Lg&s" alt="" />
                <img className="hidden md:block w-full" src="https://www.nairaland.com/attachments/15496902_3_jpeg182845aceb39c9e413e28fd549058cf8" alt="" />
            </div>
        
        </div>



        {/* Phone Product lists 2*/}
        <ProductListItems/>

        {/* Reviews */}       
        <div className="mx-5 md:mx-10 p-2 md:p-10 border-2 border-gray-200 rounded-lg">
            <h2 className="mb-10 py-1 text-[#F46B27] font-extrabold">Reviews</h2>
            <div className="p-2 md:p-10 bg-gray-100 h-50 overflow-y-auto mb-5">
                <div className="mb-6">
                    <p className="text-gray-500 font-semibold">Name: Mike Adenuga</p>
                    <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                </div>
                <div className="mb-6">
                    <p className="text-gray-500 font-semibold">Name: Johnson</p>
                    <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                </div>
                <div className="mb-6">
                    <p className="text-gray-500 font-semibold">Name: Luka Moris</p>
                    <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                </div>
            </div>
            <form action="">
                <input className="mb-2 border-1 rounded-lg border-gray-400 p-3 w-full" type="text" name="username" placeholder="Name"/>
                <textarea className="bg-gray-100 p-2 w-full" name="review" placeholder="Whats's on your mind?" rows={4}></textarea>
                <button className="mx-auto p-3 w-full rounded-sm mx-2 bg-gray-900 text-white font-semibold" type="submit">Comment</button>
            </form>
        </div>


        {/* Videos */}
        <div className="p-5 md:p-10">
            <h2 className="py-1 text-[#F46B27] font-extrabold">How to use</h2><hr />
            <div className="pt-10 shadow-lg overflow-hidden p-5 grid grid-cols-2">
                <video className="w-[30rem] h-[15rem]" autoPlay muted loop playsInline>
                    <source src="/videos/powerbank.mp4" type="video/mp4" />
                </video>
                <div className="w-[30rem] h-[15rem]">
                    <img className="w-full h-full ob" src="/riversong_earpod.jpg" alt="" />
                </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden grid grid-cols-2">
                <video className="w-[30rem] h-[15rem]" autoPlay muted loop playsInline>
                    <source src="/videos/earpies.mp4" type="earpies2/mp4" />
                </video>
                <div className="w-[30rem] h-[15rem]">
                    <img className="w-full h-full ob" src="/riversong_earpod2.jpg" alt="riversong_earpod2" />
                </div>
            </div>
        </div>
    </div>
  );
}
