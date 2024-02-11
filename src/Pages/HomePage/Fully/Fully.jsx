 import icon1 from "../../../assets/image/res-icon1.png"
 import icon2 from "../../../assets/image/res-icon2.png"
 import icon3 from "../../../assets/image/res-icon3.png"
const Fully = () => {
    return (
        <div>
            <div>
                {/* first card */}
                <div className="w-80 h-64 bg-[#F4FBFF] rounded-md">
                    <div className="px-5">
                        <div className="pt-12">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="pt-8 space-y-3">
                            <h2 className="text-2xl font-semibold text-black">Fully mobile responsive</h2>
                            <p className="text-base text-black  font-medium">Put anything in a dropdown - forms, images, videos, or any other.</p>
                       </div>
                        

                    </div>

                </div>

                {/* second card */}
                <div className="w-80 h-64 bg-[#F4FBFF] rounded-md">
                    <div className="px-5">
                        <div className="pt-12">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="pt-8 space-y-3">
                            <h2 className="text-2xl font-semibold text-black">Send notifications. Instantly</h2>
                            <p className="text-base text-black  font-medium">Put anything in a dropdown - forms, images, videos, or any other.</p>
                        </div>


                    </div>

                </div>
                 
            </div>
        </div>
    );
};

export default Fully;