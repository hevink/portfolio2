import React, { useEffect } from 'react'
import html from '../images/html5-logo-31813.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import tailwind from '../images/Tailwind.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const TechStack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <div data-aos='zoom-in' className='bg-[#EBFEFF] h-auto py-16   '>
      <p className='text-center font-semibold text-xl text-blue-600'>Skills</p>
      <p className='text-3xl text-center py-8 pt-8 font-bold md:text-4xl'>What I am capable of<span className='text-blue-700 md:px-2'>?</span></p>
      <div className='mx-auto w-2/3 md:flex md:mx-auto md:w-2/5 md:space-x-40 lg:space-x-20'>
        <div className='flex md:space-x-3'>
          <img className='h-20 w-20  ' src={html} alt="" />
          <img className='h-24 w-24 relative -top-3' src={css} alt="" />
          <img className='h-20 w-20' src={javascript} alt="" />
        </div><br />
        <div className='flex md:space-x-3'>
          <img className='h-16 w-24' src={tailwind} alt="" />
          <img className='h-20 w-20' src={react} alt="" />
          <img className='h-20 w-20' src={redux} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TechStack