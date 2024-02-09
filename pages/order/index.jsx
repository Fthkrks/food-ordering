import Image from "next/image"

const Order = () => {
  return (
    <div className="overflow-x-auto">
        <div className=' min-h-[calc(100vh_-_433px)] mr-2'>
            <div className='flex justify-center items-center p-10 flex-col'>
                <div className=' w-full flex items-center md:flex-1 mb-1 '>
                    <table className='w-full text-sm text-center min-w-[1000px] text-gray-500'>
            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                <tr>
                <th scope='col' className='py-3 px-6'>ORDER ID</th>
                <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                <th scope='col' className='py-3 px-6'>ADDRESS</th>
                <th scope='col' className='py-3 px-6'>TOTAL</th>
                </tr>

            </thead>
            <tbody>
                <tr className=' bg-secondary border-gray-700 transition-all hover:bg-primary w-full'>
                    <td className='py-4 flex items-center gap-x-6  px-6 font-medium whitespace-nowrap hover:text-white'>
                        63107f5559...
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        <span>Fatih Karakuş</span>
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        İstanbul
                    </td>
                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                        $20
                    </td>

                </tr>
            </tbody>
                    </table>
    </div>
    <div className="flex  justify-between w-full p-10 bg-primary mt-5">
        <div className="relative">
            <Image src="/images/paid.png " alt="" width={40} height={40}  objectFit="contain" />
            <span>Payment</span>
        </div>
        <div className="relative animate-pulse">
            <Image src="/images/bake.png " alt="" width={40} height={40} objectFit="contain" />
            <span>Preparing</span>
        </div>
        <div className="relative">
            <Image src="/images/bike.png " alt="" width={40} height={40} objectFit="contain" />
            <span>On the way</span>
        </div>
        <div className="relative">
            <Image src="/images/delivered.png " alt="" width={40} height={40} objectFit="contain" />
            <span>Delivered</span>
        </div>
    </div>
    </div>

</div>
    </div>

  )
}

export default Order