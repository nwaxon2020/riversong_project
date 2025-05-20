import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center sm:text-left text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Products Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Smart Watch</li>
            <li>Audio</li>
            <li>Charging</li>
          </ul>
        </div>

        {/* About & Support Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>Our Partners</li>
            <li>News</li>
            <li>Events</li>
            <li>FAQ</li>
            <li>Support Center</li>
            <li>Application Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Lagos Office: No. 15, kodesoh street,off obafemi Awolowo Road,IKEJA.</p>
          <p className="text-sm mt-2"><a className="text-blue-600 underline hover:text-white" href="mailto:Wonuola@RiversongAccessories.com">Wonuola@RiversongAccessories.com</a></p>
          <p className="text-sm mt-1">+234 701 945 8438</p>

          {/* Social Icons */}
          <div className="ml-[38%] flex sm:ml-0 space-x-4 mt-4 text-white text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mx-auto mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Riversong Tech. All rights reserved.
      </div>
    </footer>
  );
}
