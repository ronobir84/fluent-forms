import side1 from "../../../assets/image/Ellipse 166.png"
import { FcGallery } from "react-icons/fc";
const BuildForms = () => {
    return (
        <div className="mt-10">
            <div>
                {/* first section */}
                <div className="bg-[#F4FBFF] w-[750px] h-[650px]">
                    <div className="px-14 pt-12 space-y-4 w-[70%]">
                        <h2 className="text-4xl font-bold text-black">Build forms. Faster 
                            by One Click</h2>
                        <p className="text-xl font-medium text-black">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Duis imperdiet.</p>
                    </div>
                    <div className="bg-[#FFF] w-[90%] h-[430px] mt-4">
                        <div className="  relative left-[83%]    ">
                            <img src={side1} alt="" />
                        </div>
                        <div className="w-96 h-80 border-solid border-t-[10px] border-r-[10px] rounded-t-2xl border-[#ECECEC] py-6">
                            <div className=" w-80 h-52 bg-[#E3E3E3] mt-4 ml-4 rounded-md">
                            </div>
                            <div className="w-80 h-52 bg-[#F0F0F0]  relative bottom-[86%] left-8 border-black shadow-lg rounded-md ">
                                <div className="h-9 bg-black rounded-t-md space-x-2 px-4 py-2">
                                    <button className="w-4 h-4 bg-[#00A072] rounded-full"></button>
                                    <button className="w-4 h-4 bg-[#FF6154] rounded-full"></button>
                                    <button className="w-4 h-4 bg-[#FCBE2D] rounded-full"></button>
                                    
                                </div>
                                <div>
                                    <FcGallery></FcGallery>

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