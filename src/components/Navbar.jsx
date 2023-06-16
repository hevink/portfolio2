import React, { useState, useEffect } from 'react'
import '../index.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [navbar, setnavbar] = useState(false)
    console.log(navbar);

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div data-aos='fade-top' className='flex border-b-slate-900 justify-between items-center w-full h-20 px-4 text-black bg-[#EBFEFF] fixed  z-20' >
            <div>
                <h1 className='text-5xl md:ml-10'>Hevin.Dev</h1>
            </div>
            <ul className=' hidden md:flex md:mr-10' >
                <li onClick={()=>setnavbar(false)} className='px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-200'>   <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-200'><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-200'><Link to="Projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-200'><Link to="Testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonial</Link></li>
                <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-110 duration-200'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact-us</Link></li>
            </ul>
            <div onClick={() => setnavbar(!navbar)} className='z-30 text-white cursor-pointer md:hidden'>
                {/* <MenuIcon /> */}
                {navbar === true ? <CloseIcon className='duration-500 text-gray-950' fontSize='large' /> : <MenuIcon fontSize='large' className='duration-500 text-gray-950' />}
            </div>

            {navbar === true ? (
                <ul className=' md:hidden absolute h-screen flex flex-col py-32 justify-center items-center top-0 left-0 w-full bg-blue-200 duration-500'>
                    <li className='py-5 capitalize text-4xl cursor-pointer'><Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li className='py-5 capitalize text-4xl cursor-pointer'><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                    <li className='py-5 capitalize text-4xl cursor-pointer'><Link to="Projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li className='py-5 capitalize text-4xl cursor-pointer'><Link to="Testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonial</Link></li>
                    <li className='py-5 capitalize text-4xl cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact-us</Link></li>

                </ul>
            ) : " "}
        </div>
    )
}

export default Navbar