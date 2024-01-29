import side1 from "../../../assets/image/Ellipse 166.png"
const BuildForms = () => {
    return (
        <div className="mt-10">
            <div>
                {/* first section */}
                <div className="bg-[#F4FBFF] w-[750px] h-[550px]">
                    <div className="px-14 pt-12 space-y-4 w-[70%]">
                        <h2 className="text-4xl font-bold text-black">Build forms. Faster 
                            by One Click</h2>
                        <p className="text-xl font-medium text-black">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Duis imperdiet.</p>
                    </div>
                    <div className="bg-[#FFF] w-[90%] h-[350px]">
                        <div className="  relative left-[83%]    ">
                            <img src={side1} alt="" />

                        </div>
                        

                    </div>


                </div>
                {/* second section */}
                <div></div>
            </div>
        </div>
    );
};

export default BuildForms;