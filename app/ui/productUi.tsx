"use client"
import Link from "next/link";

export default function ProductUi() {
  return (
    <div className="p-5 md:p-10">
        {/* Phone Product lists */}
        <div>
            <div className="mb-12 bg-[#F46B27] p-3 shadow-lg rounded-lg w-full md:w-72 md:bg-[rgba(0,0,0,0.7)]">
                {/* Image container with hover effect */}
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
                <div className="mt-4">
                    <p className="text-white font-black font-[cursive]">Riversong Earpods</p>
                    <p className="text-gray-600 font-semibold md:text-[goldenrod]">Price: <span className="text-white font-light">&#8358;5,000</span></p>
                    <button className="text-[#F46B27] md:text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-white md:bg-[#F46B27] cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>

            <div className="mb-12 bg-[#F46B27] p-3 shadow-lg rounded-lg w-full md:w-72 md:bg-[rgba(0,0,0,0.7)]">
                {/* Image container with hover effect */}
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
                    <Link href={"/product-list"} className="absolute right-2 top-1 text-blue-300 underline">View</Link>
                    <p className="text-white font-black font-[cursive]">Riversong Earpods</p>
                    <p className="text-gray-600 font-semibold md:text-[goldenrod]">Price: <span className="text-white font-light">&#8358;5,000</span></p>
                    <button className="text-[#F46B27] md:text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-white md:bg-[#F46B27] cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
        </div>

        {/* Videos */}
        <div>
            <div className=" shadow-lg overflow-hidden p-5 grid grid-cols-2">
                <video className="w-[30rem] h-auto" autoPlay muted loop playsInline>
                    <source src="/videos/powerbank.mp4" type="video/mp4" />
                </video>
                <div>
                    <img className="w-[30rem] h-auto" src="/riversong_earpod.jpg" alt="" />
                </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden grid grid-cols-2">
                <video className="w-[30rem] h-auto" autoPlay muted loop playsInline>
                    <source src="/videos/earpies.mp4" type="earpies2/mp4" />
                </video>
                <img className="w-[30rem] h-auto" src="/riversong_earpod2.jpg" alt="riversong_earpod2" />
            </div>
        </div>
    </div>
  );
}
