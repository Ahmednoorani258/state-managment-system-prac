"use client"
// components/Navbar.tsx
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { CartContext } from '../context';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const obj = useContext(CartContext)

  return (
    <nav className="bg-gray-100 shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              Brand
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href={"/cart"}>
              Cart
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/">
              Home
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/shop">
              Shop
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 py-2">
              <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href={"/cart"}>
                Cart
              </Link>
              <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/">
                Home
              </Link>
              <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/shop">
                Shop
              </Link>
              <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/about">
                About
              </Link>
              <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
