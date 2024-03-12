 
const PricingSection = () => {
    return (
        <div className="w-full min-h-screen bg-[#00295A]">
            <div>
                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute  right-0 mt-20      rounded-full "></div>

                <div className="flex justify-between px-[170px] pt-20 ">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-semibold text-white">Pricing Section</h2>
                        <p className="text-xl  text-white">Don’t take our words for granted — build any form <br /> instantly using all the features at your disposal. </p>
                         
                    </div>
                    <div className="pt-6">
                        <button className="bg-[#0976FF] px-6 py-2 border-solid border-t-4 border-b-4 border-l-4 border-[#0976FF] text-lg text-white rounded-l">Annual</button>
                        <button className="bg-[#00295A] px-6 py-2 border-solid border-t-4 border-b-4 border-r-4 border-[#0976FF] text-lg text-white rounded-r-md">Lifetime</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default PricingSection;