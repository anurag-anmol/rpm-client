// 'use client'
// import { ChevronDown } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import { useState } from 'react';

// function Navbar() {

//     const [isOpen, setIsOpen] = useState(false);

//     // const toggleDropdown = () => setIsOpen(!isOpen);

//     return (
//         <div>
//             {/* Navbar */}
//             <div className="fixed top-0 left-0 right-0 z-[999] flex items-center min-h-[5.6rem] px-8 bg-transparent">
//                 <div className="container mx-auto flex items-center w-full max-w-[1200px] relative">
//                     <a href="/" className="flex-none w-[115px]">
//                         <div>
//                             <h1 className="text-[38px] font-[600] leading-[44px]">RPM</h1>
//                         </div>
//                     </a>

//                     <nav className="flex-1 flex justify-end items-center ml-5 mr-5">
//                         <div className="flex items-center">
//                             <div className="flex items-center space-x-0">
//                                 <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Home</Link>
//                                 <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Company</Link>
//                                 <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Work</Link>

//                                 <div className="relative ml-0">
//                                     <button
//                                         // onMouseEnter={toggleDropdown}
//                                         className="flex items-center gap-1 opacity-60 hover:opacity-100 text-white pl-[0.8rem] pr-[2.2rem] py-[0.75rem] text-[1.1rem] font-[500] transition-all duration-300"
//                                     >
//                                         <span>Pages</span>
//                                         <ChevronDown className="w-4 h-4 mt-0.5" />
//                                     </button>


//                                     {isOpen && (
//                                         <div className="absolute mt-2 w-48 bg-[#16162b] border border-[#ffffff12] rounded-[10px] z-50 shadow-xl">
//                                             <ul className="py-2">
//                                                 <li>
//                                                     <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         Pricing
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         News
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         Style Guide
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         Licensing
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         Changelog
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
//                                                         All Templates
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar
















// -------------------Responsive Web Page--------------------------

'use client'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-[999] bg-transparent px-4 md:px-8 min-h-[5.6rem] flex items-center">
                <div className="container mx-auto flex items-center justify-between w-full max-w-[1200px] relative">
                    {/* Logo */}
                    <a href="/" className="flex-none w-[115px]">
                        <h1 className="text-[38px] font-[600] leading-[44px] text-white">RPM</h1>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-1 justify-end items-center ml-5 mr-5">
                        <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Home</Link>
                        <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Company</Link>
                        <Link href="/" className="opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300">Work</Link>

                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-1 opacity-60 hover:opacity-100 text-white px-3 py-3 text-[1.1rem] font-[500] transition-all duration-300"
                            >
                                <span>Pages</span>
                                <ChevronDown className="w-4 h-4 mt-0.5" />
                            </button>

                            {isOpen && (
                                <div className="absolute top-full mt-2 w-48 bg-[#16162b] border border-[#ffffff12] rounded-[10px] z-50 shadow-xl">
                                    <ul className="py-2">
                                        {['Pricing', 'News', 'Style Guide', 'Licensing', 'Changelog', 'All Templates'].map((item) => (
                                            <li key={item}>
                                                <Link href="/" className="block px-4 py-2 text-white hover:bg-[#0c0c1d] transition-all duration-300">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed top-[5.6rem] left-0 right-0 bg-[#16162b] border-t border-[#ffffff12] z-[998] shadow-lg">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <Link href="/" className="block text-white text-[1rem] font-[500] px-2 py-2 hover:bg-[#0c0c1d] rounded transition-all duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/" className="block text-white text-[1rem] font-[500] px-2 py-2 hover:bg-[#0c0c1d] rounded transition-all duration-300">Company</Link>
                        </li>
                        <li>
                            <Link href="/" className="block text-white text-[1rem] font-[500] px-2 py-2 hover:bg-[#0c0c1d] rounded transition-all duration-300">Work</Link>
                        </li>

                        {/* Pages Dropdown in Mobile */}
                        <li>
                            <button
                                className="flex justify-between items-center w-full text-white text-[1rem] font-[500] px-2 py-2 hover:bg-[#0c0c1d] rounded transition-all duration-300"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span>Pages</span>
                                <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {['Pricing', 'News', 'Style Guide', 'Licensing', 'Changelog', 'All Templates'].map((item) => (
                                        <li key={item}>
                                            <Link href="/" className="block text-white px-2 py-1 text-sm hover:bg-[#0c0c1d] rounded transition-all duration-300">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
