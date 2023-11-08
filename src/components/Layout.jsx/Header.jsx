import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'
import { Authcontext } from '../../main';
import { Tooltip } from 'antd';

    const Header = () => {
        const [show,setShow] =useState(false)
        const [auth, setAuth] = useContext(Authcontext)
        console.log(auth);
        const LogOut =()=>{
            const auth = getAuth();
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
        }
      
        return(
            <div className='h-20  sticky top-0 bg-white z-10 flex '>
                <div className='container mx-auto flex  justify-between items-center   '>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className={`lg:flex absolute lg:static gap-8 py-10 lg:py-0 font-semibold lg:text-black w-[300px] bg-white   duration-500  lg:w-full items-center flex flex-col lg:flex-row  ${show ? '-left-1  top-[78px]': '-left-80  top-20 '} `}>
                        <li className=' list-hover w-[100px] lg:w-full'>
                            <Link to='/'>Home</Link>
                        </li>    
                        <li className=' list-hover w-[100px] lg:w-full'>
                            <Link to='/doctos'>Doctos</Link>
                        </li>
                        <li className=' list-hover w-[100px] lg:w-full'>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li className=' list-hover w-[100px] lg:w-full'>
                            <Link to='/pages'>Pages</Link>
                        </li>
                        <li className=' list-hover w-[100px] lg:w-full'>
                            <Link to='/Blogs'>Blogs</Link>
                        </li>
                        <li className=' list-hover w-[100px] lg:w-full '>
                            <Link to='/contactus'>ContactUs</Link>
                        </li>   
                        <li className=' list-hover w-[100px] lg:w-full'>
                            {
                                auth.displayName? <Link to ='/SignUp'onClick={LogOut}>SignOut</Link>: <Link to='SignUp'>SignUp</Link>
                            }
                        </li>
                    </ul>
                   
                </div>
                {
                    auth.displayName? <Tooltip title={
                    <div className='w-[200px] px-2 py-4'>
                       <h1 className='text-white text-center underline font-semibold text-base'>Mediplus Account</h1>
                       <div className='mt-4'>
                            <h3>{auth?.displayName}</h3>
                            <h4>{auth?.email}</h4>
                       </div>
                    </div>
                    }>
                    <div className='w-[40px] h-[40px] border-2 border-[#176ABC] rounded-full'>
                    <img className='rounded-full w-full' src={auth?.photoURL} alt="" />
                </div></Tooltip> :''
                }
                

                <div className='lg:flex hidden'>
                    
                    <Link to={`${auth.displayName? '/bookappoin':'/SignUp'}`} className='btnt'>Book Appointment</Link>
                </div>
                <div onClick={()=>setShow(!show)} className='lg:hidden'>
                    <span>{show === true ?  <XMarkIcon className="h-8 w-8 text-[#176ABC]" /> :  <Bars3Icon className="h-8 w-8 text-[#176ABC]" />}</span>
                </div>
                </div>  
            </div>  
        
        );
    };

    export default Header;