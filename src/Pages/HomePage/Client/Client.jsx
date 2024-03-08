import groupImg from "../../../assets/image/Group.png"
import clientImg from "../../../assets/image/client.png"
const Client = () => {
    return (
        <div>
            <div className="w-full h-[400px] bg-[#00295A] bg-blur">
                <div>
                    <img className="w-32 relative left-10 bottom-20" src={groupImg} alt="" />
                </div>
                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute   right-0     rounded-full ">
                </div>
                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute        rounded-full ">

                </div>

                <div className="  w-1/3  text-center mx-auto space-y-4 relative bottom-6">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <div>
                        <p className="text-xl font-medium text-white">“ I can highly recommend this plugin. Both functions and support are perfect. It can do very simple contact forms but also very complicated calculation forms etc.This is my go to form plugin. ”</p>
                    </div>
                    <div>
                        <img className="w-20 rounded-full ml-[43%]" src={clientImg} alt="" />
                    </div>

                    <div>
                        <p className="text-base text-white">@michaelroed on WordPress.org</p>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default Client;