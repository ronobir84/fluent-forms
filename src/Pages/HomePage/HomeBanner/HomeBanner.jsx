import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
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
                    <div className="flex gap-8 justify-center">
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

                    <div className="w-[78%] h-[600px] bg-white mx-auto">
                        <div>

                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default HomeBanner;