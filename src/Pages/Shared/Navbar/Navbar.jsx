import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between bg-[#012A5B] h-[70px] w-full items-center px-10 fixed'>
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
            </div>
        </div>
    );
};

export default Navbar;