import { FaAngleDown } from "react-icons/fa6";

const Frequently = () => {
    return (
        <div className="w-full min-h-screen bg-[#F4FBFF]">
            <div className="text-center pt-16 space-y-2">
                <h2 className="text-3xl text-black font-semibold">Frequently Asked Questions</h2>
                <p className="text-lg text-black">An independent research shows how form plugins load assets.</p>
            </div>
            <div className="text-center pt-8 relative left-[20%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="pl-6 m-1 flex items-center gap-2 px-8  py-4 border-solid border-2 border-[#EAEAEA] bg-[#FFFFFF]  rounded "><span className='text-xl font-medium text-black    '>Install & Setup</span><FaAngleDown className='text-xl font-medium text-black  '></FaAngleDown></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white  rounded-box w-36 ">
                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 1</a></li>
                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 2</a></li>
                    </ul>
                </div>
            </div> 

            <div>
                
            </div>
        </div>
    );
};

export default Frequently;