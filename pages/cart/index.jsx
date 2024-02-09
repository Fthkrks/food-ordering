import Title from '@/components/UI/Title'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import {reset} from "../../redux/cartSlice";


const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  return (
    <div className='min-h-[calc(100vh_-_433px)] mr-2'>
        <div className='flex justify-between items-center md:flex-row flex-col'>
        <div className='md:min-h-[calc(100vh_-_433px)] w-full flex items-center md:flex-1 px-10 overflow-x-auto mb-1'>
            <table className='w-full text-sm text-center min-w-[1000px] text-gray-500'>
                <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                    <tr>
                    <th scope='col' className='py-3 px-6'>PRODUCT</th>
                    <th scope='col' className='py-3 px-6'>EXTRAS</th>
                    <th scope='col' className='py-3 px-6'>PRICE</th>
                    <th scope='col' className='py-3 px-6'>QUANTITY</th>
                    </tr>

                </thead>
                <tbody>
                    {cart.products.map((product) =>(
                        <tr key={product.id} className=' bg-secondary border-gray-700 transition-all hover:bg-primary w-full'>
                            <td className='py-4 flex items-center gap-x-6  px-6 font-medium whitespace-nowrap hover:text-white'>
                                <Image src="/images/f1.png" alt ="" width={50} height={50}/>
                                <span>{product.name}</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                {product.extras.map((item) =>(
                                    <span key={item.id}>{item.name} </span>
                                ))}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                ${product.price}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            {product.quantity}
                            </td>
                    
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className=' flex flex-col justify-center  md:text-start !text-center  text-white bg-secondary  h-72  md:w-auto w-full'>
            <Title classname="text-[40px] ">CART TOTAL</Title>
            <div className='flex flex-col mt-6'>
                <span><b>Subtotal:</b> ${cart.total}</span>
                <span className='my-1 inline-block mt-1'><b>Discount:</b> $0.00</span>
                <span><b>Total:</b> ${cart.total}</span>
            </div>
            <div>
            <button className='btn-primary mt-4 md:w-auto w-52' onClick={() => dispatch(reset())}>CHECKOUT NOW!</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Cart