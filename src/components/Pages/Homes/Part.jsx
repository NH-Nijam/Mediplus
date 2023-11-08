import React from 'react';

const Part = ({counter,partName,icons}) => {
    return (
        <div className='flex items-center md:flex-row flex-col text-center md:text-start gap-4 '>
            <div className='w-[70px] h-[70px] rounder rounded-full border-2 flex items-center justify-center hover:bg-white duration-500'>
                {icons}
            </div>
            <div>
            <div>
                <h2 className='text-[35px] font-bold text-white font-Inter leading-10'>{counter}</h2>
                <h4 className='text-white font-medium'>{partName}</h4>
            </div>
            </div>
        </div>
    );
};

export default Part;