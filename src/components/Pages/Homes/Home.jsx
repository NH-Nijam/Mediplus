import React from 'react';
import CarouselPage from './CarouselPage';
import Parts from './Parts';
import Scrollbar from './Scrollbar';

const Home = () => {
   
    return (
        <div>
            <CarouselPage/>
            <Parts/>

            {/* scroll Bar  */}
            <Scrollbar/>
        </div>
    );
};

export default Home;