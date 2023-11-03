import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import './Header.css'


    const Header = () => {
        const [show,setShow] =useState(false)
        return(
            <div className='h-20  sticky top-0 bg-white z-10 flex'>
                <div className='container mx-auto flex  justify-between items-center   '>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className={`lg:flex absolute lg:static gap-4 py-10 lg:py-0 font-semibold lg:text-black bg-white   duration-500 w-[300px] lg:w-full items-center flex flex-col lg:flex-row  ${show ? '-left-1  top-[78px]': '-left-80  top-20'}`}>
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/'>Home</Link>
                        </li>    
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/doctos'>Doctos</Link>
                        </li>
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/pages'>Pages</Link>
                        </li>
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/Blogs'>Blogs</Link>
                        </li>
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/contactus'>Contact US</Link>
                        </li>   
                        <li className='py-6 px-4  list-hover'>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                   
                </div>

                <div className='lg:flex hidden'>
                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                </div>
                <div onClick={()=>setShow(!show)} className='lg:hidden'>
                    <span>{show === true ?  <XMarkIcon className="h-8 w-8 text-[#176ABC]" /> :  <Bars3Icon className="h-8 w-8 text-[#176ABC]" />}</span>
                </div>
                </div>  
            </div>  
        
        );
    };

    export default Header;