import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import computer from '../../assets/Animation - 1699031521159.json'
import { UserIcon, LockClosedIcon,LockOpenIcon  } from '@heroicons/react/24/solid'
import {AiOutlineGoogle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, } from "firebase/auth";
import app from '../firebase';
import { Authcontext } from '../../main';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [action, setAction] =useState('Sing Up')
    const [show, setShow] =useState('text')
    // const [input, setInput] =useState(required)
    const [, setAuth] = useContext(Authcontext)
    const auth = getAuth(app); 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    // sign with google 
    const signWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           setAuth(result?.user)
           navigate('/')
           
        }).catch((error) => {
            console.log("error", error);
        });
        

    }
   
    // Sign with github 
    const signWithGithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then((result) => {    
            const user = result.user;
           setAuth(user)
           navigate('/')
        }).catch((error) => {
            console.log("error", error);
        });
    }
    //  From handler
    const SignUp =(values)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuth(user)
           navigate('/')
        })
        .catch((error) => {
            console.log('error', error);
        });
    }
  
    return (
        <div className='bg-gray-950 py-20'>
            <div className='container mx-auto lg:flex '>
                <div className=' lg:w-1/2 bg-[#E8F1F9] lg:rounded-s-3xl e flex items-center'>
                    <Lottie animationData={computer} className=''/>
                </div>
                <div className='lg:w-1/2 bg-white lg:rounded-e-3xl  flex justify-center items-center py-10'>
                    <div className='md:w-7/12'>
                        <div className='text-center'>
                            <h1 className='text-[40px] font-Inter font-bold text-blue-800'>{action}</h1>
                            {
                                action === "Sign In"? <p className='text-[12px] my-3'>Hey enter your details to sign in your account</p>:<p className='text-[12px] my-3'>Hey enter your details to create your account</p>
                            }
                        </div>
                        <form onClick={(e)=>SignUp(e)}>
                            {
                                action ==="Sign In"? <div></div>:<div className='border px-3 w-full h-[40px] flex items-center gap-2   rounded-md bg-transparent my-4'>
                                <UserIcon className="h-6 w-6  " />
                                <input type="text" placeholder='Enter your Name' className='w-full text-blue-800 font-semibold outline-none bg-transparent  h-full ' required/>
                            </div>
                            }
                            
                            <div className='border px-3 w-full h-[40px] flex items-center gap-2   rounded-md bg-transparent my-4'>
                                <LockClosedIcon className="h-6 w-6  " />
                                <input type="email"  placeholder='Enter your Email' className='w-full text-blue-800 font-semibold outline-none bg-transparent  h-full ' required/>
                            </div>
                            {
                                action === "Sign In"?<div></div>: <div className='border px-3 w-full h-[40px] flex items-center gap-2   rounded-md bg-transparent my-4'>
                                <UserIcon className="h-6 w-6 " />
                                <input type="number" placeholder='Enter your Phone' className='w-full text-blue-800 font-semibold outline-none bg-transparent  h-full ' required/>
                            </div>
                            }
                           
                            <div className='border w-full h-[40px] flex items-center gap-2   rounded-md bg-transparent my-4 px-3'>
                                {
                                    show === "password"? <LockOpenIcon onClick={()=>{setShow('text')}} className="h-6 w-6  " />:<LockClosedIcon onClick={()=>{setShow('password')}} className="h-6 w-6  " />
                                }
                                <input type={`${show === 'text'? 'password': 'text'}`} placeholder={`${action === "Sign Up"? 'Create Password': 'Your Password'}`} className='w-full text-blue-800 font-semibold outline-none bg-transparent  h-full ' required/>
                            </div>
                            {
                                action === "Sign In"? <div className=' w-full h-[40px] flex items-center gap-2  px-3 rounded-md my-4 bg-blue-800 text-white justify-center font-bold '>
                                <button  type='submit'>Sign in</button>
                                </div>:<div className=' w-full h-[40px] flex items-center gap-2  ps-3 rounded-md my-4 bg-blue-800 text-white justify-center font-bold'>
                                <button type='submit'>Sign Up</button>
                            </div>
                            }                                  
                        </form>
                        <div>
                            {
                                action ==="Sign In"? <div className='underline text-blue-800 mb-10 cursor-pointer'>Forget Password</div>:<div>
                                <h3 className='text-center'>Or Signup with</h3>
                                <div className='flex gap-2 my-4 justify-center '>
                                    <div onClick={signWithGoogle} className='border flex items-center px-2 gap-1 rounded-md py-1 cursor-pointer hover:text-white duration-500 hover:bg-yellow-700' >
                                        <AiOutlineGoogle/>
                                        <h2>Google</h2>
                                    </div>
                                    <div onClick={signWithGithub} className='border flex items-center px-2 gap-1 rounded-md py-1 cursor-pointer hover:text-white duration-500 hover:bg-orange-700'>
                                        <AiFillGithub/>
                                        <h2>Github</h2>
                                    </div>
                                </div>
                            </div>
                            }
                            
                            {
                                action ==="Sign In"? <h5 className='text-center cursor-pointer'>Create new account? <spam className='text-blue-800 font-Inter font-medium' onClick={()=>{setAction("Sign Up")}}>Sign Up</spam></h5>: <h5 className='text-center cursor-pointer'>Already have an account? <spam className='text-blue-800 font-Inter font-medium' onClick={()=>{setAction("Sign In")}}>Sign In</spam></h5>
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;