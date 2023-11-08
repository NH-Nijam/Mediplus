import React from 'react';
import Part from './Part';
import CountUp from 'react-countup';
import {IoHomeSharp} from 'react-icons/io5'
import {BsEmojiSmile} from 'react-icons/bs'
import {ImUser} from 'react-icons/im'
import {VscTable} from 'react-icons/vsc'


const Parts = () => {
    return (
        <div className='bg-[url(src/img/blockqoute-bg.jpg)] w-full lg:h-[300px] bg-cover bg-no-repeat ' > 
            <div className=' h-full bg-[#1A75D1] opacity-75 py-10 lg:py-0'>
                <div className='container mx-auto  h-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-10 items-center justify-center md:justify-start '>
                    <Part icons ={<IoHomeSharp className='text-white text-[60px] p-[10px] hover:text-[#1A76D1] duration-500'/>} partName={'Hospital Rooms'} counter ={<CountUp delay={0.4} duration={5} end={3468} enableScrollSpy={true}/>}/>
                    <Part icons ={<ImUser className='text-white text-[60px] p-[10px] hover:text-[#1A76D1] duration-500'/>}  partName={'Specialist Doctors'} counter ={<CountUp delay={0.4} duration={5} end={557} enableScrollSpy={true}/>}/>
                    <Part icons ={<BsEmojiSmile className='text-white text-[60px] p-[10px] hover:text-[#1A76D1] duration-500'/>}  partName={'Happy Patients'} counter ={<CountUp delay={0.4} duration={5} end={4379} enableScrollSpy={true}/>}/>
                    <Part icons ={<VscTable className='text-white text-[60px] p-[10px] hover:text-[#1A76D1] duration-500'/>}  partName={'Years of Experience'} counter ={<CountUp delay={0.4}  end={32} duration={5} enableScrollSpy={true}/>}/>
                </div>
            </div>
        </div>
    );
};

export default Parts;