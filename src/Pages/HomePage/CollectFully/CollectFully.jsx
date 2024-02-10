import worldImage from "../../../assets/image/world-image.png"
import Icon1 from "../../../assets/image/PayPal-icon.png"
import Icon2 from "../../../assets/image/shop.icon.png"
import Icon3 from "../../../assets/image/s-icon.png"
import Icon4 from "../../../assets/image/sp-icon.png"
import Icon5 from "../../../assets/image/wire--icon.png"
import Icon6 from "../../../assets/image/dolore-icon.png"
 const CollectFully = () => {
    return (
        <div className="py-8 px-[100px]">
            <div className="flex gap-12">
                {/* first section */}
                <div>
                    <div className="bg-[#00295A] w-[700px] h-[500px] rounded-md">
                        <div className="px-10 space-y-2 pt-10">
                            <h2 className="text-2xl font-semibold text-white">Collect payments and donations</h2>
                            <p className="text-lg font-medium text-gray-300">Put anything in a dropdown - forms, images, videos, or any other Breakdance elements.</p>
                        </div>
                        
                        <div className="">
                            <div className="w-60 main-op h-60 absolute border-solid border-[17px] border-[#06CDFF] rounded-full border-opacity-15 ml-[22%]">

                            </div>
                            <div>
                                <img className=" relative  top-[98px] left-9" src={worldImage} alt="" />
                            </div>
                            <div>
                                <div className="flex">
                                    <img className="relative w-20 bottom-36 left-[55%]  " src={Icon1} alt="" />
                                    <img className="relative w-20 bottom-36 left-[23%] " src={Icon2} alt="" />
                                    <img className="w-20 relative right-16 bottom-10" src={Icon4} alt="" />
                                    
                                    <img className="w-20 relative right-4" src={Icon3} alt="" />
                                    <img className="relative bg-main left-10 bottom-8    w-[70px] h-[70px] p-4 rounded-md" src={Icon5} alt="" />
                                    <img className="relative bg-main left-32 bottom-2    w-[70px] h-[70px] p-4 rounded-md" src={Icon6} alt="" />
                                </div>
                                 
                                
                            </div>

                        </div>

                    </div>

                </div>




                {/* second section */}
                <div>
                    <div className="w-[750px] h-[500px] bg-[#F4FBFF]">
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectFully;