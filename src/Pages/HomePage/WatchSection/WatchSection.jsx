import { FiFileText } from "react-icons/fi";
const WatchSection = () => {
    return (
        <div className="min-h-screen bg-[#F4FBFF]">
            <div>
                <div className="flex justify-between px-[100px] pt-16">
                    <div>
                        <h2 className="text-3xl font-bold text-[#000] ">Watch Fluent Forms in action!</h2>
                        <p className="text-xl font-medium text-[#000]">An independent research shows how form plugins load assets.</p>
                    </div>
                    <div>
                        <button className="px-6 py-3 bg-[#0976FF] rounded text-lg font-semibold text-white">See All Templates</button>
                    </div>
                </div>



                <div>
                    <div>
                        {/* first section */}
                        <div>
                            <div>
                                {/* first button */}
                                <div>
                                    <button className="flex w-96  h-16 bg-[#00295A] justify-between items-center  p-4 rounded-md">
                                        <div className="flex items-center gap-6">
                                            <FiFileText className="text-3xl text-[#FFFFFF] "></FiFileText>
                                            <span className="text-xl text-[#FFFFFF] font-medium">Contact Form</span>
                                        </div>
                                        <div>
                                            <button className="w-11 h-11 text-xl bg-[#FFFFFF] rounded-full p-1 text-black font-semibold">02</button>
                                        </div>
                                    </button>
                                    
                                </div>


                                {/* second button */}
                                <div className="mt-2">
                                    <button className="flex w-96  h-16 bg-[#FFF] justify-between items-center  p-4 rounded-md">
                                        <div className="flex items-center gap-6">
                                            <FiFileText className="text-3xl text-[#001222] "></FiFileText>
                                            <span className="text-xl text-[#001222] font-medium">Multi Step Form</span>
                                        </div>
                                        <div>
                                            <button className="w-11 h-11 text-xl bg-[#E6E6E6] rounded-full p-1 text-[#868686] font-semibold">01</button>
                                        </div>
                                    </button>
                                    
                                </div>

                                {/* third button */}
                                <div className="mt-2">
                                    <button className="flex w-96  h-16 bg-[#FFF] justify-between items-center  p-4 rounded-md">
                                        <div className="flex items-center gap-6">
                                            <FiFileText className="text-3xl text-[#001222] "></FiFileText>
                                            <span className="text-xl text-[#001222] font-medium">Calculation Form</span>
                                        </div>
                                        <div>
                                            <button className="w-11 h-11 text-xl bg-[#E6E6E6] rounded-full p-1 text-[#868686] font-semibold">02</button>
                                        </div>
                                    </button>
                                    
                                </div>

                                {/* four button */}
                                <div className="mt-2">
                                    <button className="flex w-96  h-16 bg-[#FFF] justify-between items-center  p-4 rounded-md">
                                        <div className="flex items-center gap-6">
                                            <FiFileText className="text-3xl text-[#001222] "></FiFileText>
                                            <span className="text-xl text-[#001222] font-medium">Feedback Form</span>
                                        </div>
                                        <div>
                                            <button className="w-11 h-11 text-xl bg-[#E6E6E6] rounded-full p-1 text-[#868686] font-semibold">02</button>
                                        </div>
                                    </button>
                                    
                                </div>

                                {/* four button */}
                                <div className="mt-2">
                                    <button className="flex w-96  h-16 bg-[#FFF] justify-between items-center  p-4 rounded-md">
                                        <div className="flex items-center gap-6">
                                            <FiFileText className="text-3xl text-[#001222] "></FiFileText>
                                            <span className="text-xl text-[#001222] font-medium">Conditional Form</span>
                                        </div>
                                        <div>
                                            <button className="w-11 h-11 text-xl bg-[#E6E6E6] rounded-full p-1 text-[#868686] font-semibold">02</button>
                                        </div>
                                    </button>
                                    
                                </div>



                            </div>

                        </div>





                        {/* second section */}
                        <div>

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default WatchSection;