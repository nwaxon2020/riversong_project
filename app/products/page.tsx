import ProductUi from "@/app/ui/productUi";

export default function Product() {
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


  return (
    <div>
        <h2 className="pt-6 pb-0 px-4 md:p-10 text-2xl font-black mb-2">PRODUCTS</h2>

        <ProductUi />  

         {/* WORKING Days */}
            <div className="overflow-x-auto px-4 py-6">
                <table className="min-w-[300px] w-full border-collapse rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-gray-600 text-white">
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
  );
}
