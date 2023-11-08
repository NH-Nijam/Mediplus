import React from 'react';

const Cards = ({tag,title,discription,learn}) => {
    return (
        <div className='bg-[#1A75D1] p-8 text-white rounded-md hover:-mt-[10px] hover:shadow-xl duration-500 hover:shadow-gray-600'>
            <h3 className='mb-2 font-medium'>{tag}</h3>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='font-medium my-5'>{discription}</p>
            <h4 className='text-white font-bold'>{learn}</h4>
        </div>  
    );
};

export default Cards;