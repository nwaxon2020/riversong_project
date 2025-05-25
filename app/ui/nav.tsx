"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import "@/app/ui/ui.css"

export default function Nav(){
    const path = usePathname()
    const [sideMenu, setSideMenue] = useState(false)

    return(
        <div>
            <nav className="px-5 md:px-10 pt-8 pb-5 flex justify-between  gap-5 items-end bg-[#F46B27] md:bg-[rgba(0,0,0,0.7)] text-gray-200">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 md:border-3 border-gray-200">
                    <img className="w-full"  src="/river_song_logo.jpg" alt="logo image" />
                </div>

                <div className="flex justify-between items-end gap-20">
                    <ul className="hidden list-none font-bold md:flex gap-20 items-end">
                        <li><Link className={path === "/"? "text-[#F46B27]" : "hover:text-gray-400 transition 100 ease-in-out"} href={"/"}>Home</Link></li>
                        <li><Link className={path === "/products"? "text-[#F46B27]" : "hover:text-gray-400 transition 100 ease-in-out"}  href={"/products"}>Products</Link></li>
                        <li><Link className={path === "/about"? "text-[#F46B27]" : "hover:text-gray-400 transition 100 ease-in-out"}  href={"#"}>About</Link></li>
                        <li><Link className={path === "/contact"? "text-[#F46B27]" : "hover:text-gray-400 transition 100 ease-in-out"} href={"#"}>Contact</Link></li>
                    </ul>
                    <div className="flex gap-12">
                        <div><i className="fa fa-shopping-cart" style={{fontSize:"25px"}}></i></div>
                        <div className="md:hidden" onClick={()=> !sideMenu? setSideMenue(true) : setSideMenue(false)}><i className={!sideMenu ? "fa fa-bars" : "fa fa-angle-double-up"} style={{fontSize:"25px"}}></i></div>
                        {/* <i class='fas ' style='font-size:24px'></i> */}
                    </div>
                </div>
            </nav>

            {/* Search Input */}
            <div className="p-4 mx-3 flex justify-center items-center"><input className="border-1 border-gray-300 w-[80%] max-w-[35rem] outline-none rounded-l-2xl text-gray-900 p-[0.50rem] bg-gray-100" type="text" placeholder="Search..."/><i className="p-[0.62rem] rounded-r-2xl hover:bg-blue-800 bg-blue-600 tex-gray-200 transition 100 ease-in-out fa fa-search" style={{fontSize:"20px"}}></i></div>

            {
                sideMenu && <div className="slider md:hidden absolute right-0 w-[70%] bg-gray-500 h-[80vh] z-30">
                    <ul className="list-none font-bold flex-col items-start">
                        <li className="p-3 mt-0 mb-1 bg-gray-300" onClick={()=> setSideMenue(false)}><Link className={path === "/"? "text-green-600 block" : "block hover:text-gray-400"} href={"/"}>Home</Link></li>
                        <li className="p-3 my-1 bg-gray-300" onClick={()=> setSideMenue(false)}><Link className={path === "/products"? "text-green-600 block" : "block hover:text-gray-400"}  href={"/products"}>Products</Link></li>
                        <li className="p-3 my-1 bg-gray-300" onClick={()=> setSideMenue(false)}><Link className={path === "/about"? "text-green-600 block" : "block hover:text-gray-400"}  href={"#"}>About</Link></li>
                        <li className="p-3 my-1 bg-gray-300" onClick={()=> setSideMenue(false)}><Link className={path === "/contact"? "text-green-600 block" : "block hover:text-gray-400"} href={"#"}>Contact</Link></li>
                    </ul>
                </div>
            }

        </div>
    )
}