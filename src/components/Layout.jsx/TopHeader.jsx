import React from 'react';
import { IoIosCall} from 'react-icons/io';
import { MdEmail} from 'react-icons/md';
const TopHeader = () => {
    return (
        <div>
            <div className='md:flex md:justify-between  items-center md:h-14 container mx-auto text-center lg:text-left'>
                <div className='flex gap-5 items-center justify-center md:justify-start'>
                    <a>About</a>
                    <a>Doctors</a>
                    <a>Contact</a>
                    <a>FAQ</a>
                </div>
                <div className='md:flex gap-8 '>
                    <p className='flex items-center gap-2 justify-center md:justify-start'><span><IoIosCall className='text-blue-600'/></span><samp>+880 1234 56789</samp></p>
                    <p className='flex items-center gap-2 justify-center md:justify-start'><span><MdEmail className='text-blue-600'/></span><samp>support@yourmail.com</samp></p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default TopHeader;