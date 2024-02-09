import Title from '@/components/UI/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import { addProduct } from '@/redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const foodItems = [
    {
        id: 1,
        name: "Pizza 1",
        price: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, libero!",
        extraOptions:[
            {
                id: 1,
                name: "Extra 1",
                price: 1
            }
        ]
    },
]

const Index = () => {
    const [prices, setPrices] = useState([10, 20, 30]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [options, setOptions] = useState([
        {
            id:1,
            name: "Ketçap",
            price: 1
        },
        {
            id:2,
            name: "Mayonez",
            price: 2
        },
        {
            id:3,
            name: "Acı Sos",
            price: 3
        }
    ])
    const [extras, setExtras] = useState([]);
    const cart = useSelector((state) =>state.cart);
    const dispatch = useDispatch();

    const handleSize = (sizeIndex)=>{
        const difference = prices[sizeIndex] - prices[size]
        setSize[sizeIndex]
        changePrice(difference);
    }

    const changePrice = (number) =>{
        setPrice(price + number)
    }


    const handleChange = (e, item) =>{
        const checked = e.target.checked;
        
        if (checked){
            changePrice(item.price);
            setExtras([...extras, item]);
        }else{
            changePrice(-item.price)
            setExtras(extras.filter((extra) =>extra.id !== item.id));
        }
    } 

    const handleClick = () =>{
        dispatch(addProduct({...foodItems[0], extras, price, quantity: 1}));
    }

    console.log(cart);

  return (
    <div className='flex flex-wrap  items-center md:justify-between justify-center md:h-[calc(100vh_-_88px)] gap-1 md:mb-0 mb-2  '>
        <div className='relative md:flex-1 md:w-[80%] md:h-[80%] w-40 h-40 mx-auto  md:mt-0 mt-4 '>
            <Image src="/images/f1.png" alt='' layout='fill' objectFit='contain' />
        </div>
        <div className='mx-20'>
            <Title classname="text-6xl">Good Pizza</Title>
            <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>${price}</span>
            <p className='text-sm my-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, beatae!</p>
            <div className='md:flex-1'>
                <h4 className='text-xl font-bold '>Choose the size</h4>
                <div className='flex gap-x-20 items-center'>
                    <div className='relative w-8 h-8 cursor-pointer' onClick={() => handleSize(0)}>
                        <Image src="/images/size.png" alt='' layout='fill'/>
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium '>Small</span>
                    </div>
                    <div className='relative w-12 h-12 cursor-pointer' onClick={() => handleSize(1)}>
                        <Image src="/images/size.png" alt='' layout='fill'/>
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                    </div>
                    <div className='relative w-16 h-16 cursor-pointer' onClick={() => handleSize(2)}>
                        <Image src="/images/size.png" alt='' layout='fill'/>
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                    </div>
                </div>

            </div>
            <div className='flex gap-4 mt-4'>
                {options.map((item) =>(
                    <label key={item.id}  className='flex gap-1 items-center'>
                        <input type='checkbox' className='w-5 h-5 accent-primary' onChange={(e) => handleChange(e, item)}/>
                        <span className='text-sm font-semibold'>{item.name}</span>
                    </label>
                ))}
            </div>
            <button className='btn-primary mt-7' onClick={handleClick}>Add To Cart</button>

        </div>

    </div>
  )
}

export default Index