import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp, IoEyeSharp, IoScan } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HomeBanner = () => {
    return (
        <div className="bg-[#00295A]   w-full min-h-screen">
            <div className="pt-[9%] ">
                <div className=" text-center space-y-8 ">
                    <div className="">
                        <div className="w-56 h-56 bl-min bg-[#2FF3FF] absolute right-0 top-4 mr-7  rounded-full ">

                        </div>
                        <p className="text-xl font-medium text-white">The Fastest WordPress Form Builder</p>
                        <h2 className="text-[80px] text-white font-bold">Easy-Affordable <br /> Growth-focused</h2>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-[#0976FF] px-6 font-semibold py-4 text-xl text-white rounded-md">Get Fluent Forms</button>
                        <button className="bg-[#fff] text-xl font-semibold px-10 py-4 text-[#00295A] rounded-md border-solid border-2 border-[#5680B1]">View Demos</button>
                    </div>
                    <div className="flex gap-8 justify-center pb-8 pt-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <FaStar className="text-6xl p-3 rounded-full border-4 border-white text-white"></FaStar>

                            </div>
                            <div>
                                <h2 className="text-2xl font-bold  w-4  text-white">350+ </h2>
                                <p className="text-xl font-medium text-white">Five Star  Reviews</p>

                            </div>

                        </div>

                        <div className="flex gap-4 items-center">
                            <div>
                                <MdVerifiedUser className="text-6xl p-3 rounded-full border-4 border-white text-white"></MdVerifiedUser>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold  w-4   text-white">14Day </h2>
                                <p className="text-xl font-medium text-white">Money Back Guarantee</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div>
                                <IoMdSettings className="text-6xl p-3 rounded-full border-4 border-white text-white"></IoMdSettings>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold  w-4  text-white">300K+ </h2>
                                <p className="text-xl font-medium text-white">Active Installation</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div>
                                <IoDocumentTextSharp className="text-6xl p-3 rounded-full border-4 border-white text-white"></IoDocumentTextSharp>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold w-4 text-white">200+  </h2>
                                <p className="text-xl font-medium text-white">Forms Demos</p>
                            </div>
                        </div>
                        <div className="w-56 h-56 bl-min bg-[#2FF3FF] absolute left-0 ml-10  rounded-full">

                        </div>
                        <div className="w-56 h-56 bl-min bg-[#2FF3FF] absolute right-0 mr-10  rounded-full">

                        </div>
                    </div>

                    <div className="w-[86%] h-[600px] bg-white mx-auto  relative z-20 rounded">
                        <div>
                            <div className="w-full h-24 border-b-2 border-gray-300 flex items-center justify-between px-6">
                                <div className="flex gap-3">
                                    <FaPencil className="text-3xl  text-[#626261]"></FaPencil>
                                    <p className="text-xl  text-black">Contact Form...</p>
                                </div>
                                <div className="pr-16 ">
                                    <ul className="flex gap-4">
                                        <li><Link className="text-xl text-black font-medium">Editor</Link></li>
                                        <li><Link className="text-xl text-black font-medium">Design</Link></li>
                                        <li><Link className="text-xl text-black font-medium">Settings & Integration</Link> </li>
                                        <li> <Link className="text-xl text-black font-medium">Entries</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <button className="flex gap-3 bg-[#F2F2F2] px-6 text-[#5E5D5C] rounded py-3">
                                             <IoDocumentTextSharp className="text-2xl"></IoDocumentTextSharp>
                                            <span className="text-xl">[fluentform id=”9”]</span>
                                        </button>
                                    </div>

                                    <div>
                                        <button className="flex gap-3 bg-[#F2F2F2] px-6 text-[#5E5D5C] rounded py-3">
                                             <IoEyeSharp className="text-2xl"></IoEyeSharp>
                                            <span className="text-xl">Preview</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="flex gap-3 bg-[#8EC0FF] px-6 text-white rounded py-3">
                                             <FaCheckCircle className="text-2xl"></FaCheckCircle>
                                            <span className="text-xl">Save Form</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <IoScan className="text-4xl text-[#626261] "></IoScan>
                                        <CiMenuKebab className="text-4xl text-[#626261]"></CiMenuKebab>
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

export default HomeBanner;