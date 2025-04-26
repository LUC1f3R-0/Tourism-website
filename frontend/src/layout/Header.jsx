import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/api/placeholder/32/32" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </NavLink>

                <div className="flex items-center space-x-3 md:order-2">

                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={menuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer p-2" id="user-menu-button" onClick={() => navigate('/signup')}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a4 4 0 100 8 4 4 0 000-8zm-7 14a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>

                <div className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 right-0 z-40 md:order-1 md:w-auto w-full`} id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700">
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
