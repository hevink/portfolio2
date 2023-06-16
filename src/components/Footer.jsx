import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className=' p-5 md:ml-28 mx-auto'>
            <p className='py-1 font-semibold text-blue-600 text-xl'>Contacts</p>
            <p className='py-1 font-bold text-3xl text-black'>Get In Touch</p>
            <p className='py-1 font-semibold'>hevinkalathiya123@gmail.com</p>
            <div className='py-1 cursor-pointer flex '>
                <div className='hover:scale-125 duration-500 hover:text-red-600'>
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
                <div className='hover:scale-125 duration-500 hover:text-gray-600-600'>
                    <GitHubIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
                <div className='hover:scale-125 duration-500 hover:text-blue-600'>
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </div>
            <p className='pt-10'>Copyright @2023. Develop & Designed By Hevin Kalathiya </p>
        </div>
    )
}

export default Footer