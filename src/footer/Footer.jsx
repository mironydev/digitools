import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto text-white">
        <div className="flex flex-col md:flex-row py-20 text-center md:text-left gap-10 md:gap-0">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold">Digitools</h3>
            <p className="text-gray-400 text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <h4 className="text-lg font-medium">Product</h4>
              <ul className="text-sm space-y-2 pt-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <h4 className="text-lg font-medium">Company</h4>
              <ul className="text-sm space-y-2 pt-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <h4 className="text-lg font-medium">Resources</h4>
              <ul className="text-sm space-y-2 pt-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h4 className="text-lg font-medium">Social Links</h4>
            <ul className="flex gap-2 pt-2">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center p-2 rounded-full hover:bg-white hover:text-black duration-200"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center hover:bg-white hover:text-black p-2 rounded-full duration-200"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center hover:bg-white hover:text-black p-2 rounded-full duration-200"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 flex flex-col md:flex-row justify-between py-3 items-center text-gray-500">
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex gap-2 items-center">
              <li className="btn btn-ghost">Privacy Policy</li>
              <li className="btn btn-ghost">Terms of Service</li>
              <li className="btn btn-ghost">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
