 
const PricingSection = () => {
    return (
        <div className="w-full min-h-screen bg-[#00295A]  pb-28">
            <div>
                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute  right-0 mt-20      rounded-full "></div>

                <div className="flex justify-between px-[200px] pt-20 ">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-semibold text-white">Pricing Section</h2>
                        <p className="text-xl  text-white">Don’t take our words for granted — build any form <br /> instantly using all the features at your disposal. </p>
                         
                    </div>
                    <div className="pt-6">
                        <button className="bg-[#0976FF] px-6 py-2 border-solid border-t-4 border-b-4 border-l-4 border-[#0976FF] text-lg text-white rounded-l">Annual</button>
                        <button className="bg-[#00295A] px-6 py-2 border-solid border-t-4 border-b-4 border-r-4 border-[#0976FF] text-lg text-white rounded-r-md">Lifetime</button>
                    </div>
                </div>

                <div className="w-[220px] h-[220px] bl-min bg-[#2FF3FF] absolute   mt-60      rounded-full "></div>

                <div className="flex justify-between px-[200px] pt-10">

                    {/* first card */}
                    <div className="w-72 h-96 bg-[#FFFFFF] rounded-md shadow">
                        <div className="text-center space-y-4 pt-12">
                            <h3 className="text-2xl font-semibold text-[#001222]">Single Site License</h3>
                            <h1 className="text-6xl text-[#001222] font-extrabold">$59</h1>
                            <h4 className="text-xl text-[#001222] font-medium">Single Site license</h4>
                            <p className="text-base text-black">1 Year Plugin Update 1 Year Priority Support All Features Included</p>
                            <button className="text-lg px-5 py-3 bg-[#0976FF] text-white font-medium rounded shadow pt-3">See All Templates</button>
                        </div>
                    </div>

                    {/* second card */}
                    <div className="w-72 h-96 bg-[#0976FF] rounded-md shadow">
                        <div className="text-center space-y-4 pt-12">
                            <h3 className="text-2xl font-semibold text-[#FFFFFF]">Agency License</h3>
                            <h1 className="text-6xl text-[#FFFFFF] font-extrabold">$129</h1>
                            <h4 className="text-xl text-[#FFFFFF] font-medium">5 Domains License</h4>
                            <p className="text-base text-white">  1 Year Plugin Update 1 Year Priority Support All Features Included</p>
                            <button className="text-lg px-5 py-3 bg-[#FFFFFF] text-[#0976FF] font-medium rounded shadow pt-3">See All Templates</button>
                        </div>
                    </div>

                    {/* third card */}
                    <div className="w-72 h-96 bg-[#FFFFFF] rounded-md shadow">
                        <div className="text-center space-y-4 pt-12">
                            <h3 className="text-2xl font-semibold text-[#001222]">Unlimited License</h3>
                            <h1 className="text-6xl text-[#001222] font-extrabold">$199</h1>
                            <h4 className="text-xl text-[#001222] font-medium">Single Site license</h4>
                            <p className="text-base text-black">1 Year Plugin Update1 Year Priority Support All Features Included</p>
                            <button className="text-lg px-5 py-3 bg-[#0976FF] text-white font-medium rounded shadow pt-3">See All Templates</button>
                        </div>
                    </div>

                </div>

                 
                <div>
                    <h3 className="text-lg text-[#4898FC] font-medium text-center pt-8">*The discount is applicable for the first-year license only</h3>
                </div>
            </div>
            
        </div>
    );
};

export default PricingSection;