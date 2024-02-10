import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/image/logo.png"
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between bg-[#012A5B] h-[70px] w-full items-center px-10 fixed z-30'>
                    <div className='flex items-center gap-5'>
                        <button className='text-xl font-medium bg-[#084A75] text-[#06CDFF] px-7 py-2 rounded-3xl'>New Release</button>
                        <h2 className='text-lg text-white font-normal'>Fluent Forms 3.4 ......</h2>
                    </div>
                    <div className=''>
                        <ul className='flex gap-8 text-white text-xl font-medium'>
                            <li><NavLink className="hover:text-[#06CDFF] hover:duration-700">Docs</NavLink></li>
                            <li> <NavLink className="hover:text-[#06CDFF] hover:duration-700">Contact</NavLink></li>
                            <li> <NavLink className="hover:text-[#06CDFF] hover:duration-700">Supports</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='pt-[70px]'>
                    <div className='bg-[#012A5B] h-[90px] w-full fixed z-30 border-solid border-2 border-[#115382] flex justify-between items-center px-10 shadow-md'>
                        <div className='flex items-center' >
                            <Link className='flex items-center'><img className='w-12' src={logo} alt="" />
                                <h2><span className='text-2xl text-white font-semibold '>Fluent</span><span className='text-2xl text-gray-400'>Forms</span></h2></Link>


                             
                            <div className='flex  items-center relative left-[25%]'>
                                <div className="dropdown ">
                                    <div tabIndex={0} role="button" className="pl-6 m-1 flex items-center gap-2 "><span className='text-xl font-medium text-white    '>Features</span><FaAngleDown className='text-xl font-medium text-white  '></FaAngleDown></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white  rounded-box w-36 ">
                                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 1</a></li>
                                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <ul className='flex gap-12 pl-7'>
                                    <li><NavLink className="text-xl font-medium text-white ">Integrations</NavLink></li>
                                    <li><NavLink className="text-xl font-medium text-white ">Blog</NavLink></li>
                                    <li><NavLink className="text-xl font-medium text-white "> Pricing</NavLink></li>
                                </ul>
                            </div>
                               </div>

                        <div>
                            <button className='min-bg px-8 font-bold text-white py-3 rounded text-xl border-solid border-2 border-[#5680B1]'>Get Fluent Forms</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;