import React from 'react'
import Title from '../UI/Title'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
        <Title classname="text-[40px]">Products</Title>
        <div>
        <table className='w-full text-sm text-center min-w-[1000px] text-gray-500 mt-5'>
                <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                    <tr>
                    <th scope='col' className='py-3 px-6'>IMAGE</th>
                    <th scope='col' className='py-3 px-6'>ID</th>
                    <th scope='col' className='py-3 px-6'>TITLE</th>
                    <th scope='col' className='py-3 px-6'>PRICE</th>
                    <th scope='col' className='py-3 px-6'>ACTION</th>
                    </tr>

                </thead>
                <tbody>
                    <tr className=' bg-secondary border-gray-700 transition-all hover:bg-primary w-full'>
                    <td className='py-4 flex items-center gap-x-6  px-6 font-medium whitespace-nowrap hover:text-white'>
                        <Image src="/images/f1.png" alt="" width={50} height={50}/>
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <span>63049e92</span>
                    </td>

                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <span>Good Pizza</span>
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            $10
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        <button className='btn-primary !bg-red-600'>Delete</button>
                    </td>

                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Products