import { MdArrowOutward } from "react-icons/md";
 import mlImg from "../../../assets/image/ml.png"
 const Connect = () => {
    return (
        <div className="py-10">
            <div className="flex gap-14">
                {/* first section */}
                <div className="w-[600px] h-80 bg-[#00295A] rounded">
                    <div className="flex justify-between">
                        <div className="pt-16 pl-4 space-y-3">
                            <h2 className="text-2xl text-white font-semibold">Connect to CRM</h2>
                            <p className="text-white font-normal text-base">Your favorite CRM tool is one step away <br /> from connecting with Fluent Forms. <br /> Don’t lose another lead.</p>
                        </div>
                        <div className="w-[270px] h-[280px] bg-[#163B67] rounded-lg ">

                        </div>
                        <div className="w-64 h-[250px] bg-[#F4FBFF] absolute left-[20.6%]  rounded-md shadow-lg">
                            <div className="flex items-center justify-between py-2 mt-2">
                                <div className="w-[70px] h-[70px] bg-[#C9E4F3] p-[11px] rounded-full ml-5">
                                    <MdArrowOutward className="w-12 h-12 p-2 bg-[#FFFFFF] rounded-full"></MdArrowOutward>
                                </div>
                                <div className="w-36 h-4 bg-[#C9E4F3] rounded-l-3xl ">

                                </div>
                            </div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>
                            <div className="w-52 h-4 bg-[#C9E4F3] rounded-l-3xl ml-12 mt-2"></div>

                            <div className="flex items-center gap-2 border-solid border-t-2 border-[#DEEFF9] mt-4 ">
                                <input type="checkbox" className="toggle [--tglbg:#00B27F] bg-white hover:bg-white mt-4 ml-8" checked />
                                <h3 className="text-base text-[#353537] font-normal mt-4 ">Currently Enable</h3>
                            </div>

                        </div>
                    </div>

                </div>

                {/*second section  */}

                <div>
                    <div>
                        <div className="bg-[#002148] w-80 h-80 blur-[3px]">
                            <button className="w-56 h-4 bg-[#163B67] rounded-3xl ml-7 mt-7"></button>
                            <button className="w-11/12 h-5 bg-[#163B67] rounded-3xl mt-4 ml-4"></button>
                            <button className=" px-8 py-2 bg-white rounded ml-4 mt-3">HELLO</button>
                            <button className=" px-14 py-2 bg-white rounded ml-4">SEND</button>
                            <button className=" px-8 py-2 bg-white rounded  mt-6 ml-7">TEXT</button>
                            <button className=" px-14 py-2 bg-[#1A7EFB] rounded mt-10 ml-20">SEND</button>


                        </div>
                        <div className="w-40 h-40 bg-white border-solid border-4 border-[#D6D6D6] rounded-full relative bottom-56 left-[76px]">
                            <img className="p-9" src={mlImg} alt="" />

                        </div>
                    </div>
                       

                </div>
            </div>
        </div>
    );
 };
 
 export default Connect;