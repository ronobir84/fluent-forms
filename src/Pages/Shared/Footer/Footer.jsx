import logo from "../../../assets/image/logo.png"
 import footerImg from "../../../assets/image/footer-1.png"
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full h-[800px] bg-[#FFFFFF]'>
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

            <div>
                <div className="flex justify-between px-[200px]">
                    <div>
                        <Link>
                            <div className="flex items-center gap-1">
                                <img src={logo} alt="" />
                                <h2 className="text-3xl "><span className="text-[#282828] font-bold">Fluent</span><span className="text-gray-500">Forms</span></h2>
                            </div>
                        </Link>
                        <p className="w-52 text-[#001222] text-base pt-10">Fluent Forms is a lightweight and beginner-friendly tool to empower online businesses. You can consider it beyond a form builder.</p>
                    </div>
                    <div> 
                            <h1 className="text-2xl font-bold text-[#333]  relative top-3">RESOURCE</h1>

                            <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-5 ">Documentation</a>
                            <br />
                            <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-8">API Docs</a>
                            <br />
                            <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-11">Support</a>
                            <br />
                            <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-14">Brand Guideline</a>
                    </div>
                    <div> 
                        <h1 className="text-2xl font-bold text-[#333]  relative top-3">ADDONS</h1>

                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-5 ">Signature (Paid)</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-8">PDF Generator</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-11">Mautic</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-14">Mailpoet</a>
                    </div>
                    <div> 
                        <h1 className="text-2xl font-bold text-[#333]  relative top-3">Features</h1>

                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-5 ">Drag & Drop Form Builder</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-8">Pre-built Form Templates</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-11">Conversational Forms</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-14">Visual Data Reporting</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-16">User-generated Conten</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-20">Multi-step Forms</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-24">
                            User-generated Content</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-28">
                            Conditional Logic</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-32">
                            File & Image Upload</a>
                        <br />
                         
                     </div>
                    <div> 
                        <h1 className="text-2xl font-bold text-[#333]  relative top-3">integration</h1>

                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-5 ">Zapier</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-8">FluentCRM</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-11">Slack</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-14">BuddyBoss</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-16">WP Social Ninja</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-20">Discord</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-24">
                            FluentSupport</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-28">
                            ConvertKit</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-32">
                            Salesforce</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-36">
                            CampaignMonitor</a>
                        <br />
                         
                     </div>
                    <div> 
                        <h1 className="text-2xl font-bold text-[#333]  relative top-3">OUR BRANDS</h1>

                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-5 ">Zapier</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-8">FluentCRM</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-11">Fluent Support</a>
                            <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-14">FluentSMTP</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-16">WP Social Ninja</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-20">Paymattic</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-24">
                            FluentSupport</a>
                        <br />
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out relative top-28">
                            AzonPress</a>
                         
                         
                     </div>
                </div>


                <div>
                    <div className="flex gap-4 relative  pl-[190px]">
                        <Link><FaFacebook className="w-10 h-10 text-black"></FaFacebook></Link>
                        <Link><FaInstagram className="w-10 h-10 text-black"></FaInstagram></Link>
                        <Link><FaTwitter className="w-10 h-10 text-black"></FaTwitter></Link>
                        <Link><FaLinkedin className="w-10 h-10 text-black"></FaLinkedin></Link>
                        <Link><FaYoutube className="w-10 h-10 text-black"></FaYoutube></Link>
                    </div>
                </div>

                <div className="flex gap-4 pt-36 justify-center">
                    <h2 className="text-xl text-black ">Copyright © 2023 <span className="underline">Fluent Support</span>. A Brand of  <span className="underline">WPManageNinja</span>™</h2>
                    <Link className="text-xl text-black underline">Affiliate </Link>
                    <Link className="text-xl text-black underline">Terms </Link>
                    <Link className="text-xl text-black underline">Privacy</Link>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;