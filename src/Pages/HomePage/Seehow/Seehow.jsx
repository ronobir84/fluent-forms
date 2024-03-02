import React from 'react';
import image from "../../../assets/image/Seehow.png"
const Seehow = () => {
    return (
        <div>
            <div className='w-full h-[590px] bg-[#00295A] py-10'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-3  w-1/3 pl-20'>
                        <h2 className='text-5xl text-white font-bold'>See how fast  Fluent Forms is</h2>
                        <p className='text-xl text-white font-medium '>An <span className='text-[#0976FF] underline'>independent research</span> shows how  form plugins load assets. Hint: The lower  the better.</p>
                    </div>
                    <div>
                        <img className='  mt-5 rounded-l-lg shadow-2xl shadow-blue-500/40' src={image} alt="" />
                         
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Seehow;