import Image from "next/image";
import { useState } from "react";
import Password from "@/components/profile/Password";
import Orders from "@/components/profile/Orders";
import Products from "@/components/admin/Products";
import Order from "@/components/admin/Order";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AddProduct from "@/components/admin/AddProduct";

const Profile = () => {
  const { push } = useRouter();
  const [tabs, setTabs] = useState(0);
  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure want to close your Admin Account ?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Admin Account Closed !");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isProductModal, setIsProductModal] = useState(false);

  return (
    <div className="flex lg:flex-row flex-col px-10 lg:mb-0 mb-10">
      <div className="border lg:w-72 w-100 flex-shrink-0">
        <div className="relative flex flex-col p-5 w-72 items-center">
          <Image
            src="/images/admin.png"
            className="rounded-full "
            alt=""
            width={100}
            height={100}
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="w-full">
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa-solid fa-bowl-food"></i>
            <button className="ml-1">Products</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa-solid fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-ellipsis-h"></i>
            <button className="ml-1">Categories</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa-solid fa-laptop"></i>
            <button className="ml-1">Footer</button>
          </li>
          <li
            className={`border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            }`}
            onClick={closeAdminAccount}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
      {isProductModal && (
        <AddProduct
          isProductModal={isProductModal}
          setIsProductModal={setIsProductModal}
        />
      )}
      <button className="btn-primary w-12 h-12 absolute bottom-[555px] right-10 rounded-full flex items-center justify-center" onClick={() => setIsProductModal(!isProductModal)}>+</button>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req.cookies || "";

  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Profile;
