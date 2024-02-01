import side1 from "../../../assets/image/Ellipse 166.png"
import { FcGallery } from "react-icons/fc";
import sideImg from "../../../assets/image/build-sid.png"
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaUpDown } from "react-icons/fa6";
const BuildForms = () => {
    return (
        <div className="mt-10 px-[100px] py-14">
            <div className="flex gap-7">
                {/* first section */}
                <div className="bg-[#F4FBFF] w-[750px] h-[587px] rounded-md">
                    <div className="px-14 pt-12 space-y-4 w-[70%]">
                        <h2 className="text-4xl font-bold text-black">Build forms. Faster
                            by One Click</h2>
                        <p className="text-xl font-medium text-black">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Duis imperdiet.</p>
                    </div>
                    <div className="bg-[#FFF] w-[95%] h-[370px] mt-4 ">
                        <div className="  relative left-[84%]    ">
                            <img src={side1} alt="" />
                        </div>
                        <div className="flex">
                            <div className="w-[360px] h-80 border-solid border-t-[14px] border-r-[14px] rounded-t-2xl border-[#ECECEC] py-6 ">
                                <div className=" w-72 h-52 bg-[#E3E3E3] mt-4 ml-2 rounded-md">
                                </div>
                                <div className="w-72 h-52 bg-[#F0F0F0]  relative bottom-[86%] left-6 border-black shadow-lg rounded-md ">
                                    <div className="h-9 bg-black rounded-t-md space-x-2 px-4 py-2">
                                        <button className="w-4 h-4 bg-[#00A072] rounded-full"></button>
                                        <button className="w-4 h-4 bg-[#FF6154] rounded-full"></button>
                                        <button className="w-4 h-4 bg-[#FCBE2D] rounded-full"></button>

                                    </div>
                                    <div className="flex pt-8 px-3 items-center gap-2">
                                        <div>
                                            <FcGallery className="text-7xl"></FcGallery>
                                        </div>
                                        <div>
                                            <button className="w-44 h-3 bg-[#D9D9D9] rounded-full"></button>
                                            <button className="w-36 h-3 bg-[#D9D9D9] rounded-full"></button>
                                            <button className="w-32 h-3 bg-[#D9D9D9] rounded-full"></button>
                                            <button className="w-24 h-4 bg-[#1A7EFB] rounded-full"></button>
                                        </div>

                                    </div>
                                    <div className="relative top-20">
                                        <h2 className="text-2xl text-black font-bold">Choose a Template</h2>
                                    </div>

                                </div>
                            </div>


                            <div className=" w-[352px]  h-64 mt-20 border-solid border-t-[14px] border-[#ECECEC]">
                                <div className="px-3 pt-2">
                                    <div className="flex gap-2">
                                        <div>
                                            <span className="text-base text-[#6F767E] ">First Name</span>
                                            <input className="bg-[#EFEFEF] border w-40 h-10 rounded mt-1" type="text" />
                                        </div>
                                        <div>
                                            <span className="text-base text-[#6F767E]">Last Name</span>
                                            <input className="bg-[#EFEFEF] border w-40 h-10 rounded mt-1" type="text" />
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <span className="text-base text-[#6F767E]">Email</span>
                                        <input className="w-full bg-[#EFEFEF] h-10 border rounded mt-1" type="email" />
                                    </div>
                                    <div className="mt-4">
                                        <button className="text-lg font-semibold text-[#6F767E]">Your Message</button>
                                    </div>
                                </div>


                            </div>
                        </div>





                    </div>


                </div>
                {/* second section */}
                <div className="w-[750px] h-[588px] bg-[#00295A] ">
                    <div>
                        <div className="px-10 pt-14">
                            <h2 className="text-3xl text-white font-semibold">Conversational Forms</h2>
                            <p className="text-xl text-gray-400 font-medium pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet. Lorem ipsum dolor sit</p>
                        </div>

                        <div className="w-60 h-60 border-solid border-[18px] border-[#06CDFF] rounded-full opacity-30 absolute right-0 mr-32 mt-8">

                        </div>
                        <div className="relative top-[96px] ">
                            <div className="flex">
                                <div className="">
                                    <img className="w-80 h-80" src={sideImg} alt="" />
                                    <div className="flex relative bottom-20 left-5 ">
                                        <div className="bg-white w-48 h-14 p-2 rounded-l">
                                            <p className="text-base text-gray-400 font-medium">0% Completed</p>
                                            <button className="w-40 h-4 bg-[#D9D9D9] rounded-sm"></button>

                                        </div>
                                        <div className="w-20 h-14 bg-[#00295A] rounded-r">
                                            <div className="flex gap-2 p-4">
                                                <FaAngleDown className="text-2xl text-white"></FaAngleDown>
                                                <FaAngleUp className="text-2xl text-white"></FaAngleUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-80 h-80 bg-white">
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BuildForms;