import Image from 'next/image'
import Title from '../UI/Title'

const Orders = () => {
  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5 lg:mb-0 mb-10 lg:overflow-hidden overflow-x-auto'>
    <Title classname="text-[40px]">Order</Title>
    <table className='w-full text-sm text-center min-w-[1000px] text-gray-500 mt-5'>
                <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                    <tr>
                    <th scope='col' className='py-3 px-6'>ID</th>
                    <th scope='col' className='py-3 px-6'>ADDRESS</th>
                    <th scope='col' className='py-3 px-6'>DATE</th>
                    <th scope='col' className='py-3 px-6'>TOTAL</th>
                    <th scope='col' className='py-3 px-6'>STATUS</th>
                    </tr>

                </thead>
                <tbody>
                    <tr className=' bg-secondary border-gray-700 transition-all hover:bg-primary w-full'>
                        <td className='py-4 flex items-center gap-x-6  px-6 font-medium whitespace-nowrap hover:text-white'>

                            <span>63107...</span>
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <span>İstanbul</span>
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            26.01.2024
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            $18
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <span>preparing</span>
                        </td>

                    </tr>
                </tbody>
            </table>
</form>
  )
}

export default Orders