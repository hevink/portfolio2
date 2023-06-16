import React, { useEffect } from 'react'
import userimage from '../images/Uiimagefor_projects.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return (
        <div data-aos='flip-up' id='Projects' className='h-auto py-5'>
            <p className='text-blue-500 font-bold text-xl py-4 text-center'>Projects</p>
            <p className='text-center text-4xl font-bold py-4 pb-9'>What i Have Made ?</p>
            <div className=' space-y-5 justify-center mx-auto md:flex w-3/3 md:w-5/6 '>
                <div className='md:flex md:space-x-5  '>
                    <div className='h-auto rounded-xl w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div>
                    <div className='h-auto rounded-xl  w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div>
                    <div className='h-auto rounded-xl w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div>
                </div> 
            </div>
            <div className=' space-y-5 justify-center mx-auto md:flex w-3/3 md:w-5/6 '>
                <div className='md:flex md:space-x-5  '>
                    <div className='h-auto rounded-xl  w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div>
                    <div className='h-auto rounded-xl w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div><div className='h-auto rounded-xl  w-2/3 mx-auto bg-slate-200 border-2 drop-shadow-2xl border-b-4  mb-5'>
                        <div className=' overflow-hidden cursor-pointer '>
                            <img className='hover:scale-110 duration-500 ' src={userimage} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='text-xl font-bold'>Portfolio Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className='text-gray-500 hover:text-black text-lg hover:scale-110 duration-700 my-3 py-1 px-4 border-[1px] border-black rounded-lg'>Github</button>
                        </div>

                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Projects