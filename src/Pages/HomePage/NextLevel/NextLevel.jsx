import { FaMoneyCheck, FaUserGroup } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegWindowRestore } from "react-icons/fa";
import nextImg from "../../../assets/image/next.png"
import play from "../../../assets/image/play.png"
const NextLevel = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#00295A] py-14">
                <div className="w-72 h-72 bl-min bg-[#2FF3FF] absolute   right-0 mt-[17%]  rounded-full ">

                </div>
                <div className="w-72 h-72 bl-min bg-[#2FF3FF] absolute   mt-[25%]  rounded-full ">

                </div>
                <div className="flex justify-between px-[100px] pt-20">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-bold text-white">The <span className="text-[#0976FF]">Next Level</span>  <br />  <span className="">Experience</span></h1>
                        <p className="text-white text-xl font-normal">An <span className="text-[#0976FF]">independent research</span> shows how form plugins  load assets. Hint: The lower the better.</p>
                    </div>

                    <div className="pr-20 space-y-4">
                        <div>
                            <button className="flex gap-2 items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <FaMoneyCheck className="w-7 h-7 text-[#4898FC]"></FaMoneyCheck>
                                <span className="text-xl text-white font-normal">form builder</span>
                            </button>
                        </div>
                        <div className="relative left-20"> 
                            <button className="flex gap-2  items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <BsBookmarkCheckFill className="w-7 h-7 text-[#4898FC]"></BsBookmarkCheckFill>
                                <span className="text-xl text-white font-normal">beginner-friendly</span>
                            </button>
                        </div>
                        <div>
                            <button className="flex gap-2  items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <FaUserGroup className="w-7 h-7 text-[#4898FC]"></FaUserGroup>
                                <span className="text-xl text-white font-normal">300,000 customers</span>
                            </button>
                        </div>
                        <div className="relative left-20">
                            <button className="flex gap-2  items-center px-6 py-[10px] bg-[#154879] rounded-md border-solid border-2 border-[#4898FC]">
                                <FaRegWindowRestore className="w-7 h-7 text-[#4898FC]"></FaRegWindowRestore>
                                <span className="text-xl text-white font-normal">Enriched templates</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img className="absolute w-28 left-[45%] mt-[16%] cursor-pointer" src={play} alt="" />
                        </div>
                        <img className=" mx-auto  pr-20 " src={nextImg} alt="" />
                        
                    </div>
                     
                </div>


            </div>
        </div>
    );
};

export default NextLevel;