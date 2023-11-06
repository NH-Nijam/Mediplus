import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus} from 'react-icons/ai';
import { AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoPinterestAlt} from 'react-icons/bi';
import {BiSolidRightArrow} from 'react-icons/bi';
import {FaPaperPlane} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-[#176ABC] '> 
            <div className='container2 mx-auto grid md:grid-cols-2 lg:grid-cols-4 text-white   gap-10 py-24 '>
                {/* about us start */}
                <div className=''>
                    <h2 className='text-xl font-bold '>About Us</h2>
                    <div className='bg-white h-[3px] w-12 my-3'></div>
                    <p className='my-10' >Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                    <div className='flex gap-4 '>
                        <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center'>
                            <BiLogoFacebook size={20}/>
                        </div>
                        <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center'>
                            <AiOutlineGooglePlus size={20}/>
                        </div>
                        <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center'>
                            <AiOutlineTwitter size={20}/>
                        </div>
                        <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center'>
                            <BiLogoPinterestAlt size={20}/>
                        </div>
                    </div>
                </div>
                {/* Quick Links start */}
                <div className=''>
                    <h2 className='text-xl font-bold '>Quick Links</h2>
                    <div className='bg-white h-[3px] w-12 my-3'></div>  
                    <div className='mt-10 flex gap-10'>
                        <div className='flex flex-col gap-2'>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Home</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>About Us</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Services</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Our Cases</a> 
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Other Links</a>      
                        </div>
                        <div className='flex flex-col gap-2'>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Consuling</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Finance</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Testimonials</a>
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>FAQ</a> 
                            <a className='flex items-center gap-2'><BiSolidRightArrow size={10}/>Contact Us </a>                  
                        </div>
                    </div>
                </div>
                {/* Open Hours  */}
                <div className=''>
                    <h2 className='text-xl font-bold '>Open Hours</h2>
                    <div className='bg-white h-[3px] w-12 my-3'></div> 
                    <p className='mt-10'>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                    <div className='mt-4'>
                        <p className='flex justify-between'><span>Monday - Fridayp</span> <span>8.00-20.00</span></p>
                        <p className='flex justify-between my-1'><span>Saturday</span> <span>9.00-18.30</span></p>
                        <p className='flex justify-between'><span>Monday - Thusday</span> <span>9.00-15.00</span></p>
                    </div>
                </div>
                {/* Newsletter  */}
                <div className=''>
                    <h2 className='text-xl font-bold '>Newsletter</h2>
                    <div className='bg-white h-[3px] w-12 my-3'></div> 
                    <p className='mt-10'>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    <div className='h-14 flex rounded-lg border mt-5 text-white justify-between  items-center'>
                        <input className='bg-transparent ps-5 h-14 outline-none rounded-s-lg 'placeholder='Your email address' type="gmail" />
                        <button className='h-14 w-20 flex justify-center items-center bg-white rounded-r-lg'><FaPaperPlane className='text-[#176ABC] text-2xl' /></button>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#1A76D1]  h-20  flex justify-center items-center'>
                <p className='text-center text-white '>© Copyright 2018 | All Rights Reserved by <a href="#"><u>wpthemesgrid.com</u></a></p> 

            </div>                 
        </div>
    );
};

export default Footer;