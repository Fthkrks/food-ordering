import MenuWrapper from '@/components/product/MenuWrapper'
import axios from 'axios'
import React from 'react'

const index = ({categoryList}) => {
  return (
    <div className='pt-10'>
        <MenuWrapper categoryList = {categoryList}/>
    </div>
  )
}

export default index



export const getServerSideProps = async(context)=>{

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)

  return{
    props:{
      categoryList: res.data ? res.data : []
    }
  }

}