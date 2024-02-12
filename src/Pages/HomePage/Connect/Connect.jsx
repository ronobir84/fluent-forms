import { MdArrowOutward } from "react-icons/md";
 
 const Connect = () => {
    return (
        <div className="py-10">
            <div>
                <div className="w-[600px] h-[260px] bg-[#00295A]">
                    <div className="flex justify-between">
                        <div className="pt-16 pl-4 space-y-3">
                            <h2 className="text-2xl text-white font-semibold">Connect to CRM</h2>
                            <p className="text-white font-normal text-base">Your favorite CRM tool is one step away <br /> from connecting with Fluent Forms. <br /> Don’t lose another lead.</p>
                        </div>
                        <div className="w-[270px] h-[250px] bg-[#163B67] rounded-lg ">

                        </div>
                        <div className="w-64 h-[230px] bg-[#F4FBFF] absolute left-[20.6%]  rounded-md shadow-lg">
                            <div className="flex items-center justify-between py-2">
                                <div className="w-[70px] h-[70px] bg-[#C9E4F3] p-[11px] rounded-full ml-5">
                                    <MdArrowOutward className="w-12 h-12 p-2 bg-[#FFFFFF] rounded-full"></MdArrowOutward>
                                </div>
                                <div className="w-36 h-4 bg-[#C9E4F3] rounded-l-3xl ">

                                </div>
                            </div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>

                            <div>
                                <input type="checkbox" className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500" checked />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
 };
 
 export default Connect;