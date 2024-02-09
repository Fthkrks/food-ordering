import Image from 'next/image'
import React from 'react'
import Title from '../UI/Title'

const Order = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
    <Title classname="text-[40px]">Orders</Title>
    <div>
    <table className='w-full text-sm text-center min-w-[1000px] text-gray-500 mt-5'>
            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                <tr>
                <th scope='col' className='py-3 px-6'>PRODUCT ID</th>
                <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                <th scope='col' className='py-3 px-6'>TOTAL</th>
                <th scope='col' className='py-3 px-6'>PAYMENT</th>
                <th scope='col' className='py-3 px-6'>STATUS</th>
                <th scope='col' className='py-3 px-6'>ACTION</th>
                </tr>

            </thead>
            <tbody>
                <tr className=' bg-secondary border-gray-700 transition-all hover:bg-primary w-full'>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        <span>63049e92</span>
                </td>

                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        <span>M. Fatih Karakuş</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        $10
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        Cash
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        preparing
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                    <button className='btn-primary !bg-green-600'>Next Stage</button>
                </td>

                </tr>
            </tbody>
        </table>
    </div>

</div>
  )
}

export default Order