"use client"
import Link from "next/link"
import "@/app/ui/ui.css"
import { useState, useEffect } from "react";

export default function HomeUi(){
    
    //working days
    const schedule = [
        { day: "Monday", time: "7:00 AM - 8:00 PM" },
        { day: "Tuesday", time: "7:00 AM - 8:00 PM" },
        { day: "Wednesday", time: "7:00 AM - 8:00 PM" },
        { day: "Thursday", time: "7:00 AM - 8:00 PM" },
        { day: "Friday", time: "7:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
    ];

    const heroImages = [
        { src: "/riversong_hero_Phantom-65S.webp", id: "Phantom 65S" },
        { src: "/riversong_hero_motive9.webp", id: "Motive 9 Pro" },
        { src: "/riversong_hero_earpod.webp", id: "Utopia H5" },
        { src: "/rs_hero_da2.webp", id: "Rhythm M6" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(interval);
        
    }, []);

    const currentHero = heroImages[currentIndex];

    return(
        <div className="md:p-3">
            {/* Hero and Intro */}
            <div className="overflow-hidden md:relative md:flex items-center md:max-h-[30rem] md:px-2 rounded-sm">
            <img className="hidden sm:flex w-full md:h-[35rem]" src={currentHero.src || "/riversong_hero_Phantom-65S.webp"} alt="hero Image" />
                <img className="sm:hidden" src={currentHero.src || "/river_song_hero.jpg"} alt="hero Image" />

                <div className="block w-full p-5 text-center md:w-[22rem] h-auto md:absolute right-8 top-5 bg-[rgba(0,0,0,0.8)] text-gray-200 md:text-xl md:rounded-[2rem]">
                    <p> <span className="block mb-6 text-[goldenrod] font-bold">INNOVATION INSPIRED </span>
                        We are committed to integrating innovation, intelligence, and aesthetics into our products to bring global customers a more convenient and connected smart life.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link className="p-3 font-bold text-sm rounded-2xl text-gray-200 bg-blue-700 hover:bg-green-600 mt-5 transition duration-300 ease-in-out" href={"/products"}>Checkout Our Products</Link>
                    </div>
                </div>
                <div className="absolute left-10 top-80 md:left-50 md:top-50">
                    <p className="font-black text-2xl md:text-4xl text-gray-900 md:text-gray-700">{currentHero.id}</p>
                    <button style={{cursor:"pointer"}} className="py-2 px-4 md:py-3 md:px-6 bg-[#000] text-[#fff] rounded-md">Learn More &gt;</button>
                </div>
            </div>

            {/* Latest Products */}
            <div className="my-16 px-3 sm:px-10 flex flex-wrap gap-10 md:mt-30 md:mx-40 md:grid md:grid-cols-3">   
                <h1 className="mx-auto text-4xl text-[#536942] text-center col-span-3"><span className="font-black">O</span>ur Latest Products</h1> 

                <div className="md:max-h-[40rem] rounded-sm w-full overflow-hidden bg-[#f5f5f5]">
                    <img className="hover:scale-110 transition-all duration-500 w-full" src="/riversong_watch.jpg" alt="wriste watch image" />
                    <div className="relative">
                        <p className="relative p-5 w-full bg-[#f5f5f5] text-gray-500"><span className="m-5 block text-xl text-[#536942]">Motive 9 Pro</span> Unvail brilliance. View your content come to life in stunning details and brilliance, making every glance a breath taking experience.</p>
                        <button className="absolute top-[-25px] m-2 font-bold py-2 px-10 text-gray-200 rounded-md bg-[#F46B27] hover:bg-[goldenrod] transition-all duration-100 ease-in-out">Pick Up</button>
                    </div>
                </div>

                <div className="md:max-h-[40rem] rounded-sm w-full overflow-hidden bg-[#f5f5f5]">
                    <img className="hover:scale-110 transition-all duration-500 w-full" src="/riversong_powerbank.jpg" alt="power bank image" />
                    <div className="relative" >
                        <p className="p-5 w-full bg-[#f5f5f5] text-gray-500"><span className="m-5 block text-xl text-[#536942]">Horizon 10</span>
                        Perfect for your daily use. Never stay offline with the new <span className="font-bold">Horizon 10,</span> equiped with type-C & B, fast-charging to keep your mobile battery alive.</p>
                        <button className="absolute top-[-25px] m-2 font-bold py-2 px-10 text-gray-200 rounded-md bg-[#F46B27] hover:bg-[goldenrod] transition-all duration-100 ease-in-out">Pick Up</button>
                    </div>
                </div>

                <div className="md:max-h-[40rem] rounded-sm w-full overflow-hidden bg-[#f5f5f5]">
                    <img className="hover:scale-110 transition-all duration-500 w-full" src="/riversong_earpod2.jpg" alt="earpod image" />
                    <div className="relative">
                        <p className="relative p-5 w-full bg-[#f5f5f5] text-gray-500"><span className="m-5 block text-xl text-[#536942]">Airfly L2</span>
                        Block the noise with advanced ENC {"(Environmental Noise Cancellation)"}. <span className="font-bold">Airfly L2</span> has maximum noise cancellation, it offers cristal clear sounds even in every bustling cities plus quality sounds bars to enjoy the beauty of music.
                        </p>
                        <button className="absolute top-[-25px] m-2 font-bold py-2 px-10 text-gray-200 rounded-md bg-[#F46B27] hover:bg-[goldenrod] transition-all duration-100 ease-in-out">Pick Up</button>
                    </div>
                </div>   
            </div>

            {/* Inspiration Message */}
            <div className="p-5 my-5 md:my-20 md:p-20 text-center md:text-4xl text-[#536942] bg-[#F6F8F5] font-[sans]">
                <p className="mx-auto p-10 md:w-[40rem] ">&ldquo;Original in every way and with warranty, giving you qaulity above price. With our products every day is a win, a joy of fulfilment and as always a pleasure to work with.&rdquo;</p>
                <div className="mx-auto w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full" src="/images_holder.png" alt="" />
                </div>
                <div className="p-5 mx-auto  bg-gray-100">
                    <small className="text-sm font-extrabold"><span className="text-[goldenrod]">Mr. Wonuola</span> Lagos Branch Manager</small>
                    <small className="block text-sm"><span className="font-bold">contact:</span>  Wonuola@RiversongAccessories.com</small>
                    <small className="block text-sm"><span className="font-bold">Tel:</span> +234 810 794 4006</small>
                </div>
            </div>

            {/* ABOUT US */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-25">
                <div className="p-10 md:border-1 border-[#F46B27] rounded-md md:p-20">
                    <p className="mb-5"><small className="block text-[#536942]">ABOUT US</small>

                    <span className="block mb-5 text-2xl md:mb-10 md:text-4xl font-bold font-[sans]">Tell website visitors who you are and why they should choose your business.</span>
                    Because when a visitor first lands on your website, you&apos;re a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you&apos;re selling.</p>

                    <Link href={"/products"} className="inline py-3 px-8 border-2 border-[#F46B27] hover:border-green-500 text-[#F46B27] hover:text-green-500 transition-all duration-200 ease-in-out rounded-sm font-bold">Find Out More</Link>
                </div>
                
                {/* About Us Image Card */}
                <div className="grid grid-cols-2 gap-4 p-5">
                    <div className="a w-full h-[6rem] md:h-auto hover:scale-110 duration-600">
                        <span className="px-2 py-4">Style</span>
                    </div>
                    <div className="b w-full h-[6rem] md:h-auto hover:scale-110 duration-600 ">
                        <span className="px-2 py-4">Jazz L7</span>
                    </div>
                    <div className="c w-full h-[6rem] md:h-auto hover:scale-110 duration-600 ">
                        <span className="px-2 py-4">PowerKub G-100</span>
                    </div>
                    <div className="d w-full h-[6rem] md:h-auto hover:scale-110 duration-600 ">
                        <span className="px-2 py-4">Motive 9E</span>
                    </div>
                </div>
            </div>

            {/* QUESTION & CONTACT */}
            <div className="que text-center p-5 my-8 md:my-20 md:p-40">
                <h1 className="text-4xl mb-10 text-[#F46B27]">QUESTIONS?</h1>
                <p className="mx-auto mb-10 max-w-[30rem] text-gray-200">
                    Whether you&apos;re curious about features, newly released products, or even repairs, we&apos;re here to answer any questions.
                </p>
                <a href="mailto:omowonuoladurojaiye@gmail.com">
                    <button className="px-4 py-2 bg-[#F46B27] text-white rounded hover:opacity-[0.8] transition">
                       Let&apos;s Talk Now
                    </button>
                </a>
            </div>

            {/* WORKING Days */}
            <div className="overflow-x-auto px-4 py-6">
                <table className="min-w-[300px] w-full border-collapse rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-[#F46B27] text-white">
                    <tr>
                        <th className="text-left px-4 py-3">Days</th>
                        <th className="text-left px-4 py-3">Working Hours</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white text-gray-700">
                    {schedule.map((item, index) => (
                        <tr key={index} className="border-t hover:bg-gray-100 transition-colors">
                        <td className="px-4 py-2 font-medium">{item.day}</td>
                        <td className="px-4 py-2">{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
        
    )
}