import React, { useContext } from 'react';


const BookAppoin = () => {
    return (
        <div className='container mx-auto mt-28'>
            <div className=' md:w-6/12 flex flex-col justify-center items-center text-center mx-auto mb-20'>
                <h1 className='text-[35px] font-bold leading-10'>We Are Always Ready To Help You. Book An Appointment</h1>
                <img className='mt-7 mb-5' src="src/img/section-img.png" alt="" />
                <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
            <div  className='container mx-auto flex gap-5'>
                <div className='lg:w-1/2 '>
                    <div className='grid md:grid-cols-2  gap-x-10 gap-y-5'>
                        <input type="text" placeholder='Name'  className='border px-4 py-3 text-[#868686] rounded' />
                        <input type="email" placeholder='Email'  className='border px-4 py-3 text-[#868686] rounded' />
                        <input type="number" placeholder='Phone'  className='border px-4 py-3 text-[#868686] rounded' />
                        <select className='border px-4 py-3 flex gap-5 rounded focus:border-[#BFDEFF] focus:border-4 text-[#868686]' name="" id="">
                            <option value="Depertment">Depertment</option>
                            <option value="CardiacClinic">Cardiac Clinic</option>
                            <option value="Neurology" >Neurology</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Gastroenterology" selected>Gastroenterology</option>
                        </select>
                        <select className='border px-4 py-3 flex gap-5 rounded text-[#868686] focus:border-[#BFDEFF] focus:border-4' name="" id="">
                            <option value="Doctor">Doctor</option><br />
                            <option value="Dr.Nijam Hossen" selected>Dr.Nijam Hossen</option><br />
                            <option value="Dr. Dery Alex" >Dr. Dery Alex</option>
                            <option value="Dentistry">Dr. Akter Hossain</option>
                            <option value="Gastroenterology" >Dr. Sujoy Da</option>
                        </select>
                        <input type='Date' placeholder='Date'  className='border px-4 py-3 text-[#868686] rounded' />
                    </div>
                    <textarea className='w-full border rounded mt-5 py-3 px-4' placeholder='Write Your Message Here.....' name="" id="" cols="30" rows="10"></textarea>
                    <button className='btnt mt-5'>Book An Appointment</button>
                </div>
                <div className='lg:w-1/2 bg-[url(src/img/contact-img.png)] bg-cover'>
                    
                </div>
            </div>
        </div>
    );
};

export default BookAppoin;