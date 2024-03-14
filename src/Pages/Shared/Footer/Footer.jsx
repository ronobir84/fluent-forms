import logo from "../../../assets/image/logo.png"
 import footerImg from "../../../assets/image/footer-1.png"
const Footer = () => {
    return (
        <div className='w-full h-[600px] bg-[#FFFFFF]'>
            <div className='w-[78%] h-52 bg-[#0976FF] mx-auto relative bottom-20 rounded-lg shadow-lg '>
                <div className="flex  items-center px-24">
                    <div className="flex items-center gap-8">
                        <div>
                            <img className="w-40" src={footerImg} alt="" />
                        </div>
                        <div>
                            <h2 className="text-3xl text-white font-semibold">We believe to manage  your data and forms.</h2>
                            <p className="text-xl font-medium text-white">Stay in touch with us. We'll send you tips and tricks, news and updates, discounts and deals.</p>

                        </div>

                    </div>
                    <div className="mt-4">

                        <div>
                            <div className="relative  w-max rounded-lg">
                                <input className="peer rounded-md border-solid border-2 border-[#FFF] px-14 py-4 text-[#1B8EF8] focus:outline-none bg-[#146FE1]" type="text" placeholder="" />
                                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">Email</label>
                            </div>
                            <span className="text-base text-[#A7CEFF] mt-2">We won't send you spam. Unsubscribe at any time.</span>
                        </div>
                        <div>
                            <button className="bg-[#FFFFFF] px-7 py-3 text-xl font-semibold text-[#0976FF] rounded-md shadow mt-2">Subscribe</button>
                        </div>


                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;