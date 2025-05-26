"use client"
import Link from "next/link";

export default function ProductUi() {
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



        {/* Phone Product lists */}
        <div className="p-10 md:p-20 md:grid grid-cols-4 gap-4">
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
            <div className="mb-28 bg-[#FFFFFF] p-3 shadow-lg rounded-lg w-full md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-64 group overflow-hidden rounded-md">
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-gray-400 underline">view</Link>
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>

        </div>



        <div className="bg-gray-900 p-4 md:p-20 mt-20">
            <div className="md:hidden">
                <iframe className="w-full h-auto md:w-[600px] h-[450px]" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31707.06926540197!2d3.325367691898957!3d6.599150457068119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15%20kodesoh%20street%2Coff%20obafemi%20Awolowo%20Road%2CIKEJA.!5e0!3m2!1sen!2sng!4v1748220274482!5m2!1sen!2sng" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="hidden md:block">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31707.06926540197!2d3.325367691898957!3d6.599150457068119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15%20kodesoh%20street%2Coff%20obafemi%20Awolowo%20Road%2CIKEJA.!5e0!3m2!1sen!2sng!4v1748220274482!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className="text-gray-400"><span className="font-bold text-[goldenrod]">SHOP LOCATION:</span> No 15 kodesoh street,off obafemi Awolowo Road,IKEJA.</p>
        </div>



        {/* Phone Product lists */}
        <div className="text-center px-5 md:px-20 pb-28 pt-10 grid grid-cols-2 justify-center items-center gap-4 md:flex md:flex-wrap md:justify-around">
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-15 my-5 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[11rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>
            <div className="mb-10 bg-[#F46B27] p-3 shadow-lg rounded-lg w-[10rem] h-50 md:w-72 shadow-lg">
                {/* Image container with hover effect md:bg-[rgba(0,0,0,0.7)]*/}
                <div className="relative w-full h-full group overflow-hidden rounded-md">
                    <button className="z-30 absolute top-0 right-2 text-white mt-6 mb-2 p-1 rounded-sm font-semibold w-10 bg-red-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Add</button>
                    <img
                        src="/riversong_earpod2.jpg"
                        alt="Default"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <img
                        src="/riversong_earpod.jpg"
                        alt="On Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Product info */}
                <div className="mt-4 relative">
                    <p className="text-gray-800 font-black font-mono">Riversong Earpods</p>
                    <p className="text-red-600 font-semibold font-[cursive]">Price: <span className="text-gray-500 font-light">&#8358;5,000</span></p>
                </div>
            </div>

        </div>



        {/* Videos */}
        <div className="p-5 md:p-10">
            <div className=" shadow-lg overflow-hidden p-5 grid grid-cols-2">
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
