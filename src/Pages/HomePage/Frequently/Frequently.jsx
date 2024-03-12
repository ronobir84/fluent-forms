import { FaAngleDown } from "react-icons/fa6";

const Frequently = () => {
    return (
        <div className="w-full min-h-screen bg-[#F4FBFF]">
            <div className="text-center pt-16 space-y-2">
                <h2 className="text-3xl text-black font-semibold">Frequently Asked Questions</h2>
                <p className="text-lg text-black">An independent research shows how form plugins load assets.</p>
            </div>
            <div>
                <div className="dropdown relative left-[74%]">
                    <div tabIndex={0} role="button" className="pl-10 m-1 flex items-center gap-8 border-solid border-2 border-[#EAEAEA] rounded shadow bg-[#FFFFFF] w-56 h-14  "><span className='text-2xl font-medium text-[#001222]   '>Features</span><FaAngleDown className='text-2xl font-medium text-black  '></FaAngleDown></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white  rounded-box w-36 ">
                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 1</a></li>
                        <li className='text-[#06CDFF] text-xl font-medium'><a>Item 2</a></li>
                    </ul>
                </div>                
            </div>
            <div className="px-[200px] space-y-4 mt-10">
                <div className="collapse collapse-plus bg-[#FFFFFF] p-3 border-solid border-2 border-[#EAEAEA] shadow">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-2xl text-black font-medium">
                        Who should use Fluent Forms?
                    </div>
                    <div className="collapse-content">
                        <p className="text-base text-black">Fluent Forms is a lightweight and beginner-friendly tool to empower online businesses. You can consider it beyond a form builder, as it helps you grow your business with many cutting-edge features. Whether you want to sell products, collect information, integrate marketing tools, or receive payments — Fluent Forms has a lot to offer.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFFF] border-solid border-2 border-[#EAEAEA] shadow p-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl text-black font-medium">
                        Do I need coding skills to use Fluent Forms?
                    </div>
                    <div className="collapse-content">
                        <p className="text-base text-black"> it helps you grow your business with many cutting-edge features. Whether you want to sell products, collect information, integrate marketing tools, or receive payments — Fluent Forms has a lot to offer.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFFF] border-solid border-2 border-[#EAEAEA] shadow p-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl text-black font-medium ">
                       Will Fluent Forms affect the speed of my website??
                    </div>
                    <div className="collapse-content">
                        <p className="text-base text-black"> .. collect information, integrate marketing tools, or receive payments — Fluent Forms has a lot to offer.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFFF] border-solid border-2 border-[#EAEAEA] shadow p-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl text-black font-medium">
                        How can I use Fluent Forms on client sites?
                    </div>
                    <div className="collapse-content">
                        <p className="text-base text-black"> it helps you grow your business with many cutting-edge features. Whether you want to sell products,</p>
                    </div>
                </div>
            </div>

             
        </div>
    );
};

export default Frequently;