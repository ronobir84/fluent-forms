import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
const HomeBanner = () => {
    return (
        <div className="bg-[#00295A] w-full min-h-screen">
            <div className="pt-[10%] ">
                <div>
                    <div>
                        <p className="text-xl font-medium text-white">The Fastest WordPress Form Builder</p>
                        <h2 className="text-7xl text-white font-bold">Easy-Affordable Growth-focused</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-[#0976FF] px-6 font-semibold py-4 text-xl text-white rounded-md">Get Fluent Forms</button>
                        <button className="bg-[#fff] text-xl font-semibold px-10 py-4 text-[#00295A] rounded-md border-solid border-2 border-[#5680B1]">View Demos</button>
                    </div>
                    <div>
                        <div>
                            <FaStar className="text-7xl p-3 rounded-full border-4 border-white text-white"></FaStar>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">350+ </h2>
                            <p className="text-xl font-medium text-white">Five Star Reviews</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <MdVerifiedUser className="text-7xl p-3 rounded-full border-4 border-white text-white"></MdVerifiedUser>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">14 Days  </h2>
                            <p className="text-xl font-medium text-white">Money Back Guarantee</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <IoMdSettings className="text-7xl p-3 rounded-full border-4 border-white text-white"></IoMdSettings>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">300K+ </h2>
                            <p className="text-xl font-medium text-white">Active Installation</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <IoDocumentTextSharp className="text-7xl p-3 rounded-full border-4 border-white text-white"></IoDocumentTextSharp>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">200+  </h2>
                            <p className="text-xl font-medium text-white">Forms Demos</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;