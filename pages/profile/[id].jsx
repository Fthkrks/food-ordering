import Image from "next/image";
import { useEffect, useState } from "react";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Orders from "@/components/profile/Orders";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = ({user}) => {

    const {push} = useRouter();
    const [tabs, setTabs] = useState(0);
    const {data: session} = useSession();

  const handleSignOut = () => {
    if (confirm("Are you sure want to sign out")) {
      signOut({redirect: false});
      push("/auth");
    }
  };

  useEffect(() =>{
    if(!session){
        push("/auth");
    }

  }, [session, push])


//? client slide tarafında yönlendirme işlemi  
//   useEffect(() =>{
//     if(!session){
//       push("/auth")
//     }

//   }, [session, push ])


  return (
    <div className="flex lg:flex-row flex-col px-10 lg:mb-0 mb-10">
      <div className="border lg:w-72 w-100 flex-shrink-0">
        <div className="relative flex flex-col p-5 w-72 items-center">
          <Image
            src={user.image ? user.image : "/images/client1.jpg"}
            className="rounded-full "
            alt=""
            width={100}
            height={100}
          />
          <b className="text-2xl mt-1">{user.name}</b>
        </div>
        <ul className="w-full">
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa-solid fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa-solid fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={handleSignOut}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user = {user} />}
      {tabs === 1 && <Password user = {user} />}
      {tabs === 2 && <Orders />}
    </div>
  );
};

export async function getServerSideProps({params}){


    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`);

    return {
      props:{
        user: user ? user.data : null,
      }
    }

}


export default Profile;
