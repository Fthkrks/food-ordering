/* eslint-disable @next/next/no-page-custom-font */
import Header from "@/components/layout/Header";
import Home from "./home";
import Input from "@/components/form/Input";
import axios from "axios";


export default function Index({categoryList}) {
  return (
    <>
    <Home categoryList={categoryList}/>
    </>


  )

}


export const getServerSideProps = async(context)=>{

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)

  return{
    props:{
      categoryList: res.data ? res.data : []
    }
  }

}