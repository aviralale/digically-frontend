import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-purple-600 border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={128} height={24} />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-xs">
              Follow us on social media to stay updated with the latest tips,
              trends, and insights in digital marketing.
            </p>
            <p className="text-white font-medium text-sm">
              hello@digically.com
            </p>
          </div>

          {/* Home Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">Home</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">
              Social Media
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div className="col-span-1 hidden md:block"></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm">© 2025 DIGICALLY</p>

            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-50 transition-colors text-sm"
              >
                Term of Services
              </a>
            </div>

            <p className="text-gray-200 text-sm">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
