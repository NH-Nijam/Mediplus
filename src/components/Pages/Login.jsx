import Lottie from 'lottie-react';
import React from 'react';
import computer from '../../assets/Animation - 1699031521159.json'

const Login = () => {
    return (
        <div className='bg-gray-950 py-20'>
            <div className='container mx-auto flex '>
                <div className=' lg:w-1/2 bg-[#E8F1F9] rounded-s-3xl'>
                <Lottie animationData={computer}/>
                </div>
                <div className='lg:w-1/2 bg-white rounded-e-3xl flex justify-center items-center'>
                    <div>
                        <div className='text-center'>
                            <h1 className='text-[40px] font-Inter font-bold text-blue-800'>Sign Up</h1>
                            <p className='text-[14px] my-5'>Hey enter your details to create your account</p>
                        </div>
                        <div className='border w-full h-[40px] '>
                            <input type="text" placeholder='Enter your Name' className='w-full  h-full '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;