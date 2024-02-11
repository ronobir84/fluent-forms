import worldImage from "../../../assets/image/world-image.png"
import Icon1 from "../../../assets/image/PayPal-icon.png"
import Icon2 from "../../../assets/image/shop.icon.png"
import Icon3 from "../../../assets/image/s-icon.png"
import Icon4 from "../../../assets/image/sp-icon.png"
import Icon5 from "../../../assets/image/wire--icon.png"
import Icon6 from "../../../assets/image/dolore-icon.png"
import phone1 from "../../../assets/image/phone-image-1.png"
import phone2 from "../../../assets/image/phone-image-2.png"


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
                    <div className="w-[700px] h-[500px] bg-[#F4FBFF] ">
                        <div className="flex">
                            <div className="w-96 h-72">

                                <div className="w-[154px] h-[105px] border-solid border-b-[40px]   border-[#8AEAFF] absolute right-[25.5%] rotate-45    rounded-t-3xl rounded-b-lg opacity-30">

                                </div>
                                <div className=" border-solid border-b-[40px]   border-[#8AEAFF] relative top-[75%]  left-10 -rotate-45 rounded-l-[30px]  rounded-r-[20px] opacity-30">


                                </div>

                                <div className="w-[150px] h-[80px] border-solid border-b-[40px]   border-[#8AEAFF] relative top-[80%] rotate-45 rounded-r-[30px] opacity-30">

                                </div>


                                <div className=" relative bottom-14 p-8">
                                    <h2 className="text-2xl text-black font-semibold">Fully mobile responsive</h2>
                                    <p className="text-lg text-gray-500 font-medium ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div>
                                    <div className="relative left-[105px] top-6 ">
                                        <img className="bg-[#FFF] " src={phone2} alt="" />
                                        <div className="absolute top-8 left-7">
                                            <h2 className="text-xl text-black font-semibold">Personal Informations</h2>
                                            <div className="pt-1">
                                                <span className="font-semibold text-[#666D7A]">Company Name</span>
                                                <input type="text" className="w-96 h-10 bg-[#ECECEC] border-solid border-2 border-gray-300 px-3" placeholder="Example"/>
                                            </div>
                                            <div className="pt-1">
                                                <span className="font-semibold text-[#666D7A]">Solutoins</span>
                                                <input type="text" className="w-96 h-10 bg-[#ECECEC] border-solid border-2 border-gray-300 px-3" placeholder="Solutoins" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                
                                </div>

                            </div>

                            <div>
                                <div>
                                    <div className="relative left-[75px] top-[57px] ">
                                        <img className="bg-[#FFF] " src={phone1} alt="" />
                                        <div>
                                            
                                            <div className="absolute top-14 left-6 ">
                                                <h2 className="text-xl text-black font-semibold">Personal Informations</h2>
                                                <div className="pt-2">
                                                    
                                                    <div>
                                                        <span className=" font-semibold text-[#666D7A]">Company Name</span>
                                                        <input className="h-10 bg-[#ECECEC] mt-1 border-solid border-2 border-gray-300 text-base p-2" type="text" placeholder="Example" />
                                                   </div>
                                                    
                                                    <div className="pt-2">
                                                        <h2 className=" font-semibold"><span>First Name</span> <span className="text-[#F00] text-lg">*</span></h2>
                                                        <input className="h-10 bg-[#ECECEC] mt-1 border-solid border-2 border-gray-300 p-2" type="text" placeholder="John" />
                                                   </div>
                                                    <div className="pt-2">
                                                        <h2 className=" font-semibold"><span>Last Name</span> <span className="text-[#F00] text-lg">*</span></h2>
                                                        <input className="h-10 bg-[#ECECEC] mt-1 border-solid border-2 border-gray-300 p-2" type="text" placeholder="Smith" />
                                                   </div>
                                                    <div className="pt-2">
                                                        <h2 className=" font-semibold">Email Address</h2>
                                                        <input className="h-10 bg-[#ECECEC] mt-1 border-solid border-2 border-gray-300 p-2" type="text" placeholder="Example@gmail.com" />
                                                    </div>
                                                    <div className="flex gap-4 pt-4 ">
                                                        <div>
                                                            <input type="checkbox" className="w-6 h-6" />
                                                        </div>
                                                        <div >
                                                            <div className="w-40 h-4 bg-gray-300 rounded-3xl mt-1"></div>
                                                             
                                                        </div>
                                                    </div>
                                                   
                                                 </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                     
                                    
                                </div>

                            </div>
                            
                        </div>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectFully;