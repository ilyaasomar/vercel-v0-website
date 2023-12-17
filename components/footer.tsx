"use client";

import { Facebook, Linkedin, SchoolIcon, Twitter } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dchiBVs08dT
 */
export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white mt-36">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <SchoolIcon className="h-6 w-6 text-white" />

            <p className="mt-4 text-gray-400">
              Transforming the way you conduct transactions, taking your
              Point-of-Sale system to the next level
            </p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-400 uppercase">Products</h3>
            <ul className="mt-4">
              <li>
                <a className="block mt-2" href="#">
                  Commerce
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Point of sale
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Payments
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Online
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-400 uppercase">Business Types</h3>
            <ul className="mt-4">
              <li>
                <a className="block mt-2" href="#">
                  Quick Service
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Full Service
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Food & beverage
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Fast casual
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Retail
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-400 uppercase">Resources</h3>
            <ul className="mt-4">
              <li>
                <a className="block mt-2" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Quick Service
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Full Service
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Fast casual
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Sales
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-400 uppercase">Contact</h3>
            <ul className="mt-4">
              <li>
                <a className="block mt-2" href="#">
                  Customer support: 1 (855) 700-6000
                </a>
              </li>
              <li>
                <a className="block mt-2" href="#">
                  Sales: 1 (800) 470-1673
                </a>
              </li>
            </ul>
            <div className="flex mt-4 gap-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <Facebook className="h-7 w-7 fill-current text-green-600" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <Twitter className="h-7 w-7 fill-current text-green-600" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <Linkedin className="h-7 w-7 fill-current text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <a className="text-gray-400 mr-4" href="#">
                Terms
              </a>
              <a className="text-gray-400 mr-4" href="#">
                Privacy
              </a>
              <a className="text-gray-400" href="#">
                Cookies
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Ilyas Omar &copy;copyright All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
