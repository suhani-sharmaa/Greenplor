import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaYoutube,FaPinterest } from 'react-icons/fa';
import cart from '../images/cart.png'

function Footer() {
  return (
    <footer className="bg-[#1d1f1e] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className=" grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl flex justify-evenly">
          
          <div>
            <h2 className="font-bold text-lg">Get to Know Us</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-600 transition duration-600 hover:opacity-50">FAQ's</a></li>
              <li><a href="#" className="hover:text-green-600 transition duration-600 hover:opacity-50">Bulk & Corporate Request</a></li>
              <li><a href="#" className="hover:text-green-600 transition duration-600 hover:opacity-50">Register as a Seller</a></li>
              <li><a href="#" className="hover:text-green-600 transition duration-600 hover:opacity-50">Contact Us</a></li>
            </ul>
          </div>

          <div >
            <h2 className="font-bold text-lg">Policies</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Track My Order</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Return and Refund Policy</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Terms and Conditions</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg">Support</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Get Customer Support</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg">Company Info</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">About Us</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-600 hover:opacity-50">Careers</a></li>
            </ul>
          </div>
         
          <div className="mt-8 flex gap-4">
          <a href="#" className="text-gray-500  hover:text-green-300 transition duration-600">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-300 transition duration-600">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-300 transition duration-600">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-300 transition duration-600">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-300 transition duration-600">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-300 transition duration-600">
            <FaPinterest className="w-6 h-6" />
          </a>
        </div>
</div>
        <div className="flex items-center -mb-9"><img src={cart} alt="cart" className="h-[6vh] cursor-pointer"/></div>
        
        <div className="mt-8 text-gray-500">
          <p className="text-xs sm:text-sm lg:text-base text-center">
            © 2024 GreenPlore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
