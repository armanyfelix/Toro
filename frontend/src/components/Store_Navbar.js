import React from 'react';
import { Link } from 'react-router-dom';

function store_Navbar() {
    return (
        <div>
            <nav className="navbar flex justify-between text-white  flex-wrap bg-teal-500 p-6 pt-6">
                <div className="flex text-white mr-6">
                    <span className=" ml-20 text-4xl font-mate uppercase ">Omar Villatoro</span>
                </div>

                <div className="rounded p-2 hover:bg-gray-900">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </div>

                <div id="menu" className="w-auto text-gray-300">
                    <div className="text-lg font-mate italic mr-20 ">
                        <Link to="/Gallery" className=" mt-4 lg:inline-block font-mate lg:mt-0 text-teal-200 hover:text-white  mr-4">
                            Gallery
                        </Link>
                        <Link to="/Store" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Store
                        </Link>
                        <a href="#autor" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="#contact" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Contact
                        </a>

                    </div>
                </div>
                <div className="block lg:hidden ">
                    <button id="boton-menu"
                        className="flex items-center px-3 py-2 border rounded text-teal-200 lg:hidden border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default store_Navbar;