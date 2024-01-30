import side1 from "../../../assets/image/Ellipse 166.png"
const BuildForms = () => {
    return (
        <div className="mt-10">
            <div>
                {/* first section */}
                <div className="bg-[#F4FBFF] w-[750px] h-[550px]">
                    <div className="px-14 pt-12 space-y-4 w-[70%]">
                        <h2 className="text-4xl font-bold text-black">Build forms. Faster 
                            by One Click</h2>
                        <p className="text-xl font-medium text-black">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Duis imperdiet.</p>
                    </div>
                    <div className="bg-[#FFF] w-[90%] h-[350px]">
                        <div className="  relative left-[83%]    ">
                            <img src={side1} alt="" />

                        </div>
                        <div className="">
                            <div className="bg-[#E3E3E3] w-72 h-56 rounded-md ">
                            </div>
                            <div className="bg-[#F0F0F0] w-72 h-56 relative bottom-60 left-4 rounded-md shadow-md">
                                <div className="bg-black h-10 rounded-t-md">
                                    <div className="flex space-x-3 p-3 px-4">
                                        <button className="w-4 h-4 bg-[#00A072] rounded-full"></button>
                                        <button className="w-4 h-4 bg-[#FF6154] rounded-full"></button>
                                        <button className="w-4 h-4 bg-[#FCBE2D] rounded-full"></button>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>


                </div>
                {/* second section */}
                <div></div>
            </div>
        </div>
    );
};

export default BuildForms;