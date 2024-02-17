import { FaMoneyCheck, FaUserGroup } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";
 import gallery from "../../../assets/image/galler.png"
const NextLevel = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#00295A]">
                <div className="w-72 h-72 bl-min bg-[#2FF3FF] absolute   right-0 mt-[17%]  rounded-full ">

                </div>
                <div className="w-72 h-72 bl-min bg-[#2FF3FF] absolute   mt-[25%]  rounded-full ">

                </div>
                <div>
                    <div>
                        <h1 className="text-6xl font-bold text-white">The <span className="text-[#0976FF]">Next Level</span> Experience</h1>
                        <p className="text-white text-xl font-normal">An <span className="text-[#0976FF]">independent research</span> shows how form plugins load assets. Hint: The lower the better.</p>
                    </div>

                    <div>
                        <div>
                            <button className="flex gap-2 items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <FaMoneyCheck className="w-7 h-7 text-[#4898FC]"></FaMoneyCheck>
                                <span className="text-xl text-white font-normal">form builder</span>
                            </button>
                        </div>
                        <div>
                            <button className="flex gap-2 items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <BsBookmarkCheckFill className="w-7 h-7 text-[#4898FC]"></BsBookmarkCheckFill>
                                <span className="text-xl text-white font-normal">beginner-friendly</span>
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default NextLevel;