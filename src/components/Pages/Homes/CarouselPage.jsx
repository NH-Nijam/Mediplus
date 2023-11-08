import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cards from './Cards';
import {MdArrowRightAlt} from 'react-icons/md'

const CarouselPage = () => {
    useEffect(() => {
        AOS.init(3000);
      }, [])
    return (
        <div >
            <Swiper
                modules={[Navigation, Autoplay ]}
                // spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{delay:5000}}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider2.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-[url(src/img/slider3.jpg)] w-full lg:h-[600px] lg:bg-cover bg-no-repeat bg-contain py-24'>
                        <div className='container mx-auto flex w-full lg:h-[600px] '>
                            <div className='lg:w-1/2 flex flex-col '>
                                <h1 
                                data-aos ='fade-up'  
                                data-aos-duration= '1200'
                                className='leading-[45px] font-bold text-[40px] text-[#2C2D3F]'>We Provide <span className='text-[#1A76D1]'>Medical</span> Services That You Can <span className='text-[#1A76D1]'>Trust!</span></h1>
                                <p 
                                data-aos ='fade-up'  
                                data-aos-duration= '1500'
                                className='my-8'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                                <div 
                                data-aos ='fade-down'  
                                data-aos-duration= '3000'
                                className='md:flex gap-5'>
                                    <button className='btnt text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Get Appointment</button>
                                    <button className='btns text-[20px] font-bold bg-[#176ABC]  text-white    rounded-lg '>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-7 relative top-[-130px] z-10'>
                <Cards learn={<div className='flex items-center gap-2'>LEARN MORE<MdArrowRightAlt className='text-white text-[25px] mt-[3px]'/></div>} discription={'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.'} title={'Emergency Cases'} tag={'Lorem Amet'}/>
                <Cards learn={<div className='flex items-center gap-2'>LEARN MORE<MdArrowRightAlt className='text-white text-[25px] mt-[3px]'/></div>} discription={'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.'} title={'Doctors Timetable'} tag={'Fusce Porttitor'}/>
                <Cards learn={<div className='flex items-center gap-2'>LEARN MORE<MdArrowRightAlt className='text-white text-[25px] mt-[3px]'/></div>} discription={
                <div>
                    <div className='flex justify-between'>
                        <h2>Monday - Fridayp</h2>
                        <h2>8.00-20.00</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>Saturday</h2>
                        <h2>9.00-18.30</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>Monday - Thusday</h2>
                        <h2>9.00-15.00</h2>
                    </div>
                </div>} title={'Opening Hours'} tag={'Donec luctu'}/>
            </div>
        </div>
    );
};

export default CarouselPage;