import groupImg from "../../../assets/image/Group.png"
const Client = () => {
    return (
        <div>
            <div className="w-full h-[400px] bg-[#00295A] bg-blur">
                <div>
                    <img className="w-32 relative left-10 bottom-20" src={groupImg} alt="" />
                </div>
                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute   right-0     rounded-full ">

                </div>

            </div>
        </div>
    );
};

export default Client;