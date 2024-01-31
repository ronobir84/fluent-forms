import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp, IoEyeSharp, IoScan } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiAirplaneDuotone } from "react-icons/pi";
const HomeBanner = () => {
    return (
        <div className="bg-[#00295A]   w-full min-h-screen py-20">
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
                            <div className="w-56 h-56 bl-min bg-[#2FF3FF] absolute left-0 ml-10 mb-10 rounded-full">

                            </div>
                            <div className="w-56 h-56 bl-min bg-[#2FF3FF] absolute right-0 mb-10 mr-10  rounded-full">

                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="w-[86%] h-[650px] bg-white mx-auto   rounded">
                        <div>
                            <div className="w-full h-24 border-b-2 border-gray-300 flex items-center justify-between px-6">
                                <div className="flex gap-3">
                                    <FaPencil className="text-3xl  text-[#626261]"></FaPencil>
                                    <p className="text-lg  text-black">Contact Form...</p>
                                </div>
                                <div className="pr-16 ">
                                    <ul className="flex gap-6">
                                        <li><Link className="text-lg text-black font-medium">Editor</Link></li>
                                        <li><Link className="text-lg text-black font-medium">Design</Link></li>
                                        <li><Link className="text-lg text-black font-medium">Settings & Integration</Link> </li>
                                        <li> <Link className="text-lg text-black font-medium">Entries</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <button className="flex gap-3 bg-[#F2F2F2] px-6 text-[#5E5D5C] rounded py-3">
                                            <IoDocumentTextSharp className="text-2xl"></IoDocumentTextSharp>
                                            <span className="text-xl">[fluentform id=”9”]</span>
                                        </button>
                                    </div>

                                    <div>
                                        <button className="flex gap-3 bg-[#F2F2F2] px-6 text-[#5E5D5C] rounded py-3">
                                            <IoEyeSharp className="text-2xl"></IoEyeSharp>
                                            <span className="text-lg">Preview</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="flex gap-3 bg-[#8EC0FF] px-6 text-white rounded py-3">
                                            <FaCheckCircle className="text-2xl"></FaCheckCircle>
                                            <span className="text-lg">Save Form</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoScan className="text-3xl text-[#626261] "></IoScan>
                                        <CiMenuKebab className="text-3xl text-[#626261]"></CiMenuKebab>
                                    </div>
                                </div>

                            </div>

                            {/* from section */}
                            <div className="flex">
                                
                                    <div className=" w-[60%] pt-10 px-10 border-r-2 border-gray-600" >
                                        <div className="flex gap-4">
                                            <div className="">
                                                <span className=" pr-[74%] text-lg  text-[#1E1F21] font-semibold">First Name</span>
                                                <div className="pt-2">
                                                <input className="w-[385px] h-14 p-4 bg-white border-solid  border-2 border-gray-300 text-lg" type="text" placeholder="Jhon " />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="">
                                                <span className=" pr-[74%] text-lg  text-[#1E1F21] font-semibold">Last Name</span>
                                                </label>
                                                <div className="pt-2">
                                                <input className="w-[385px] h-14 p-4 bg-white border-solid  border-2 border-gray-300" type="text" placeholder="Doe " />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="pt-10">
                                                <span className=" pr-[93%] text-lg  text-[#1E1F21] font-semibold">Email</span>
                                                <div className="pt-2">
                                                    <input className="w-full h-14 p-4 bg-white border-solid  border-2 border-gray-300 text-lg" type="text" placeholder="example@mail.com " />
                                                </div>
                                            </div>
                                            <div className="pt-10">
                                                <span className=" pr-[79%] text-lg  text-[#1E1F21] font-semibold">* Subscription Item</span>
                                                <div className="pt-2">
                                                    <input className="w-full h-14 p-4 bg-white border-solid  border-2 border-gray-300 text-lg" type="text" placeholder="Subscription Item " />
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <span className="  pr-[74%] text-lg  text-[#1E1F21] font-semibold">$120.00 for each month</span>
                                            </div>
                                            <div className="pt-6">
                                                <button className=" relative right-[37%]  w-1/4 h-14 rounded bg-[#00295A] text-white font-semibold text-xl ">Submit Form</button>
                                            </div>
                                        </div>
                                    </div>
                               
                                {/* second from section */}
                                <div className="w-full">
                                    <div className="">
                                        <div role="tablist" className="tabs flex  gap-10 p-4 px-6">
                                            <a role="tab" className=" border-b-4 border-solid border-[#1A7EFB]  text-xl font-medium text-[#1A7EFB] cursor-pointer">Input Fields</a>
                                            <a role="tab" className="text-xl font-medium text-[#626261] cursor-pointer">Input Customization</a>
                                            
                                        </div>
                                        <div className="bg-[#F2F2F2] py-5">
                                            <div className="px-6">
                                                <div className="pt-8">
                                                    <input type="search" name="" id="" placeholder="Search name, address, mask input etc," className="bg-white w-full h-16 border-2 px-14 text-xl rounded-md" />
                                                    <IoSearch className="text-4xl relative bottom-12 left-4"></IoSearch>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="collapse collapse-arrow bg-white">
                                                        <input type="radio" name="my-accordion-2" checked="checked" />
                                                        <div className="collapse-title text-2xl text-black font-medium text-left">
                                                            Advanced Fields
                                                        </div>
                                                         
                                                    </div>
                                                    <div className="collapse collapse-arrow bg-white">
                                                        <input type="radio" name="my-accordion-2" />
                                                        <div className="collapse-title text-2xl text-black font-medium text-left">
                                                            General Fields
                                                        </div>
                                                        <div className="collapse-content">
                                                            <p className="text-xl text-black">hello</p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse collapse-arrow   bg-white">
                                                        <input type="radio" name="my-accordion-2" />
                                                        <div className="collapse-title text-2xl text-black font-medium text-left">
                                                            Container
                                                        </div>
                                                        <div className="collapse-content">
                                                            <p>hello</p>
                                                        </div>
                                                    </div>

                                                    <div className="gap-4 flex">
                                                        <button className="px-10 py-3 bg-[#fff] rounded shadow-md">
                                                            <IoDocumentTextSharp className="text-4xl mx-auto pb-2 text-gray-500 "></IoDocumentTextSharp>
                                                            <span className="text-black text-xl font-medium">Payment Field</span>
                                                        </button>
                                                        <button className="px-10 py-3  shadow-md bg-[#1E1F21] rounded">
                                                            <PiAirplaneDuotone className="text-4xl mx-auto pb-2 text-[#fff] "></PiAirplaneDuotone>
                                                            <span className="text-[#fff] text-xl font-medium">Subscription Field</span>
                                                        </button>
                                                    </div>
                                                    
                                                     
                                                </div>
                                            </div>
                                        </div>
                                        
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