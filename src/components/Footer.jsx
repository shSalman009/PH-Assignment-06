import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#101727] text-gray-300 px-4 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-10 py-8 sm:py-16">
          <div className="md:col-span-2 text-center sm:text-start">
            <h2 className="text-4xl font-bold text-white mb-4">DigiTools</h2>
            <p className="text-sm max-w-sm mx-auto sm:mx-0">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="text-center sm:text-start">
            <h3 className="text-xl text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Templates</li>
              <li className="cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div className="text-center sm:text-start">
            <h3 className="text-xl text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Press</li>
            </ul>
          </div>

          <div className="text-center sm:text-start">
            <h3 className="text-xl text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer">Documentation</li>
              <li className="cursor-pointer">Help Center</li>
              <li className="cursor-pointer">Community</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="md:col-span-2 flex justify-center sm:justify-start md:justify-end">
            <div className="inline-block sm:text-start text-center">
              <h3 className="text-xl text-white font-semibold mb-4">
                Social Links
              </h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                  <RiInstagramFill className="text-black size-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                  <FaFacebookSquare className="text-black size-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                  <RiTwitterXFill className="text-black size-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
