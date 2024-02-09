import React from 'react'
import Title from '../UI/Title'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-secondary text-white'>
      <div className='container mx-auto pt-16 pb-6'>
        <div className='flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-5'>
          <div className='md:flex-1'>
            <Title classname="text-[38px]">Contact Us</Title>
            <div className='flex flex-col gap-3 mt-4'>
            <div className='flex gap-x-2 justify-center' >
            <i className="fa-solid fa-location-dot"></i>
              <span>Location</span>
            </div>
            <div className='flex gap-x-2 justify-center' >
            <i className="fa-solid fa-phone"></i>
            <span>Call +01 1234567890</span>
            </div>
            <div className='flex gap-x-2 justify-center' >
            <i className="fa-solid fa-envelope"></i>
            <span>example@mail.com</span>
            </div>
            </div>

          </div>
            <div className='md:flex-1'>
            <Title classname="text-[38px]">Feane</Title>
            <div className='flex flex-col gap-3'>
              <p className='mt-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sit quas consequuntur repellat, perferendis placeat sapiente error iste magnam porro.
              </p>
              <div className='flex items-center justify-center gap-x-3 mt-6'>
                <a href='#' className='hover:bg-primary transition-all w-8 h-8 flex justify-center items-center bg-white text-secondary rounded-full'>
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href='#' className='hover:bg-primary transition-all w-8 h-8 flex justify-center items-center bg-white text-secondary rounded-full'>
                <i className="fa-brands fa-twitter"></i>
                </a>
                <a href='#' className='hover:bg-primary transition-all w-8 h-8 flex justify-center items-center bg-white text-secondary rounded-full'>
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href='#' className='hover:bg-primary transition-all w-8 h-8 flex justify-center items-center bg-white text-secondary rounded-full'>
                <i className="fa-brands fa-instagram"></i>
                </a>
                <a href='#' className='hover:bg-primary transition-all w-8 h-8 flex justify-center items-center bg-white text-secondary rounded-full'>
                <i className="fa-brands fa-pinterest"></i>
                </a>
              </div>
            </div>

          </div>
          <div className='md:flex-1'>
            <Title classname="text-[38px]">Contact Us</Title>
            <div className='flex flex-col gap-3'>
              <span>Everyday</span>
              <span>10.00 Am - 10.00 pm</span>
            </div>

          </div>
        </div>
        <div className='mt-10'>
          <p className='text-center'>2022 All Rights Reserved By Free Html Templates</p>
        </div>
      </div>
    </div>
  )
}

export default Footer