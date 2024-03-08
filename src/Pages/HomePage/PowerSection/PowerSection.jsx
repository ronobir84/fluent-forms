import groupImg from "../../../assets/image/Group.png"
import PowerIcon from "../../../assets/image/PowerIcon.png"
 
const PowerSection = () => {
    
    return (
        <div className="">
            <div className="w-full h-[550px] bg-[#F4FBFF] ">
                <div>
                    <img className="w-32 relative mx-auto bottom-16 right-20" src={groupImg} alt="" />
                </div>
                <div className="flex items-center  px-[100px] "> 
                    <div>
                        <img className="w-[66%] relative left-7" src={PowerIcon} alt="" />

                    </div>
                    <div className="w-1/4 space-y-5">
                        <h2 className="text-4xl font-bold text-[#202020] ">Add more power with all integrations</h2>
                        <p className="text-xl font-semibold text-[#000000]">And 5000+ other integrations via Zapier</p>
                        <button className="border-solid border-b-4 border-[#4898FC] text-lg text-[#000000] font-medium">View all integrations</button>
                    </div>
                </div>
                

            </div>
        </div> 
    );
};

export default PowerSection;