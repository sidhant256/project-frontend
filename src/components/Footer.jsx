import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F1F0FF] text-gray-700 px-4 md:px-10 py-10 mt-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-10 justify-between gap-12">
        {/* Left: Paragraph section */}
        <div className="md:w-1/2 ">
          <p className="text-gray-500 max-w-xl mb-6">
            Curablurr consequat, purus a scelerisque sagittis, nulla <br />
            metus tincidunt elit, vel veneratis nulla libero nec nulla. <br />
            Suspendisse potenti. Aenean a justo vel sapien <br />
            pellentesque tincidunt. Sed luctus, elit ac interdum <br />
            convallis, ligula libero egestas orci, at auctor felis ligula <br />
            nec odio.
          </p>

          {/* Icons-section */}
          <div className="flex gap-5 mt-4">
            <FaLinkedin size={22} color='blue' />
            <MdEmail size={22} color='blue' />
          </div>
        </div>

        {/* Right: List section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-4">Products</h3>
              <ul className="space-y-3 text-gray-500">
                <li>Payments</li>
                <li>Invoice Factoring</li>
                <li>Invoice Finance</li>
                <li>Supplier Finance</li>
                <li>Customer Finance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li>Frequently Asked Questions</li>
                <li>Knowledge Base</li>
                <li>API Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Contact us</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Site map</a>
          <span>@ebpearls</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
