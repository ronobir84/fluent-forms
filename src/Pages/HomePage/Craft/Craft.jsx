 
import { FaCheck } from "react-icons/fa";
const Craft = () => {

    return (
        <div className="mx-[105px] pr-5 relative right-2 py-6">
            <div className="w-full h-36 bg-[#0976FF] rounded">
                <div className="flex justify-between items-center px-10 pt-8">
                    <div className="space-y-3">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Craft amazing web forms!</h2>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-white text-base"></FaCheck>
                                <p className="text-base text-white font-medium">Use on unlimited sites</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-white text-base"></FaCheck>
                                <p className="text-base text-white font-medium">Use on unlimited sites</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-white text-base"></FaCheck>
                                <p className="text-base text-white font-medium">Use on unlimited sites</p>

                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <button className="px-7 py-4 bg-[#00295A] text-lg font-semibold text-white rounded">See All Templates</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Craft;