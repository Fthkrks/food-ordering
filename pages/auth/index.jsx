/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Login from "@/components/auth/Login"
import { getSession, useSession } from 'next-auth/react'

import axios from 'axios';

const index = ({user}) => {

  const {data: session} = useSession();




  console.log(session);

  return (
    <div>
        <Login user = {user}/>
    </div>
  )
}



//? server slide tarafında yönlendirme işlemi 

export async function getServerSideProps({req}) {

  const session = await getSession({req})
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);

  if (session && user){
      return{
          redirect:{
              destination: "/profile/" + user._id,
              permanent: false
          }
      }
  }

  return {

    props:{
      user: user ? user.data : null
    }
  }
}

export default index