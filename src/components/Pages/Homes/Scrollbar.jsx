import React from 'react';
import {useEffect} from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
const Scrollbar = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className='scroll'>
            <MdOutlineKeyboardArrowUp size={40}/>
            </button>
        </div>
    );
};

export default Scrollbar;