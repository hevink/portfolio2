import React, { useEffect, useRef, useState } from "react";

import client1 from '../images/User-testi-1.jpg'
import client2 from '../images/User-testi-2.jpg'
import client3 from '../images/User-testi-3.jpg'
import client4 from '../images/User-testi-4.jpg'

// 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { lightGreen } from "@mui/material/colors";
import Aos from 'aos';
import 'aos/dist/aos.css';



const Testimonials = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
})
  return (
    <div data-aos='fade-up' id="Testimonials" className="bg-[#EBFEFF] h-auto cursor-pointer">
      <p className="text-center text-3xl py-10 font-semibold text-blue-700 ">Testimonials</p>
      <Swiper

        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 80 },
          480: { slidesPerView: 1, spaceBetween: 150 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1028: { slidesPerView: 3, spaceBetween: 50 },
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto w-4/5 border-2 p-4 rounded-lg m-10">
            <div className="py-5 border-b-2">Hevin's software company is a trusted partner. Their customized solutions have streamlined our processes and enhanced our overall performance Hevin's software company is exceptional! The quality of his work is unmatched.</div>
            <div className="w-4/5 pt-3 mx-auto flex h-auto justify-center space-x-3 ">
              <img className="rounded-full h-20 w-20" src={client1
              } alt="" srcset="" />
              <p className="h-1/2 flex align-center py-4">Robert Jack Limeline Co.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Testimonials