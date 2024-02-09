import worldImage from "../../../assets/image/world-image.png"
import Icon1 from "../../../assets/image/PayPal-icon.png"
import Icon2 from "../../../assets/image/shop.icon.png"
import Icon3 from "../../../assets/image/s-icon.png"
import Icon4 from "../../../assets/image/sp-icon.png"
import Icon5 from "../../../assets/image/wire--icon.png"
import Icon6 from "../../../assets/image/dolore-icon.png"
 const CollectFully = () => {
    return (
        <div className="py-8">
            <div>
                {/* first section */}
                <div>
                    <div className="bg-[#00295A] w-[650px] h-[500px]">
                        <div className="px-10 space-y-2 pt-10">
                            <h2 className="text-2xl font-semibold text-white">Collect payments and donations</h2>
                            <p className="text-lg font-medium text-gray-300">Put anything in a dropdown - forms, images, videos, or any other Breakdance elements.</p>
                        </div>
                        
                        <div className="">
                            <div className="w-52 main-op h-52 absolute border-solid border-[12px] border-[#06CDFF] rounded-full border-opacity-15 ml-[24%]">

                            </div>
                            <div>
                                <img className=" relative  top-[98px]" src={worldImage} alt="" />
                            </div>
                            <div>
                                <div>
                                    <img className="relative w-20 left-[50%] bottom-36 " src={Icon1} alt="" />
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

export default CollectFully;