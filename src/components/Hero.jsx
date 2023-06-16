import React, { useEffect } from 'react'
import img1 from './Hero_image-2.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return (
        <div id='hero' className='bg-[#EBFEFF] md:mx-auto md:flex md:justify-center border-t-slate-600 border-t-2 pt-5 border-b-2 h-auto pb-24  '>
            <div data-aos='fade-right' className='bg-[#EBFEFF] flex flex-col px-16 md:w-3/6 md:pt-20 mt-20 md:mt-0'>
                <p className='py-2 text-[#4F83A3] text-lg'>Hi Everyone, I am</p>
                <p className='pb-3 text-4xl text-blue-500 font-bold'>Hevin Kalathiya</p>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, velit? Maiores aspernatur quas explicabo! Ullam provident itaque placeat dolorem illum.</p>
                <div className='flex space-x-3 py-5'>
                    <div className='border rounded-lg bg-[#457B9D] text- p-2 md:px-8 hover:bg-[#EBFEFF] text-white hover:text-black duration-500 hover:border-black'><button>Get My CV</button></div>
                    <div className='border rounded-lg  p-2 md:px-8 hover:text-white hover:bg-[#457B9D] duration-500 hover:border-black' ><button>Contact Me</button></div>
                </div>
            </div>
            <div data-aos='fade-left'>
                <img className='bg-[#EBFEFF] w-64 mx-auto mt-10 md:w-80 ' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Hero