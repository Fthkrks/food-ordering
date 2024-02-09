/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import Image from 'next/image'
import { IoIosCloseCircle } from "react-icons/io";

const Search = ({setIsSearch, isSearch}) => {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 ">
        <div className=' absolute w-full h-full bg-white opacity-50'></div>
        <OutsideClickHandler onOutsideClick={() =>(setIsSearch(!isSearch))}>
            <div className='w-full h-full '> 
                <div className='relative  md:w-[600px] w-[370px] border-2 p-10 bg-white  rounded-3xl'>
                    <Title classname="text-[40px] text-center">Search</Title>
                    <input type='text' placeholder='search...' className='border w-full my-10' />
                    <div>
                      <ul>
                        <li className='flex justify-between items-center p-2 hover:bg-primary transition-all'>
                          <div className='relative flex'>
                            <Image src="/images/f1.png" alt='food'  width={48} height={48}/>
                          </div>
                          <span className='font-bold'>Good Pizza</span>
                          <span className='font-bold'>$10</span>
                        </li>
                        <li className='flex justify-between items-center p-2 hover:bg-primary transition-all'>
                          <div className='relative flex'>
                            <Image src="/images/f1.png" alt='food'  width={48} height={48}/>
                          </div>
                          <span className='font-bold'>Good Pizza</span>
                          <span className='font-bold'>$10</span>
                        </li>
                        <li className='flex justify-between items-center p-2 hover:bg-primary transition-all'>
                          <div className='relative flex'>
                            <Image src="/images/f1.png" alt='food'  width={48} height={48}/>
                          </div>
                          <span className='font-bold'>Good Pizza</span>
                          <span className='font-bold'>$10</span>
                        </li>
                        <li className='flex justify-between items-center p-2 hover:bg-primary transition-all'>
                          <div className='relative flex'>
                            <Image src="/images/f1.png" alt='food'  width={48} height={48}/>
                          </div>
                          <span className='font-bold'>Good Pizza</span>
                          <span className='font-bold'>$10</span>
                        </li>
                      </ul>
                      <div>
                        <button className='absolute top-4 right-4' >
                          <IoIosCloseCircle size={30} className='hover:text-primary' onClick={() => (setIsSearch(!isSearch))} />
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    </div>

  )
}

export default Search