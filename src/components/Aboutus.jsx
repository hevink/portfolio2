import React, { useEffect } from 'react'
import devloper from './Devloper_image.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <div id='about' className=' md:flex mx-auto md:flex-row-reverse w-full h-auto border-b-2
       '>
      <div data-aos='fade-up-left' className='w-2/3 md:w-1/3 mx-auto py-8'>
        <p className='text-xl text-[#5C8BA9] font-semibold py-2 pb-2'>About</p>
        <p className='text-4xl font-bold pb-4'>About <span className='text-blue-600'>Me?</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, vitae, iusto exercitationem veniam consequatur aliquam corporis obcaecati totam eius nulla optio. Nulla dignissimos possimus, iste esse porro, modi minima, eum quasi molestias voluptate inventore temporibus moles quos doloribus voluptatum dolore velit? Quisquam, iste impedit!</p>
      </div>
      <div data-aos='fade-up-right' className='w-2/3 mx-auto md:w-96  '>
        <img className='' src={devloper} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Aboutus