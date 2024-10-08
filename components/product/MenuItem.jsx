import Image  from "next/image"
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
        <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl  ">
        <Link href="/Product">
          <div className="relative w-40 h-40 hover:scale-110 transition-all">
            <Image  src="/images/f1.png" alt="" layout="fill" priority/>
          </div>
        </Link>
        </div>

        <div className="p-[25px] text-white">
            <h4 className="text-xl font-semibold">Delicious Pizza</h4>
            <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, inventore!</p>
            <div className="flex justify-between items-center mt-5 ">
                <span>20$</span>
                <button className="btn-primary w-10 h-10 rounded-full p-0 grid place-content-center "><FaCartShopping /></button>
            </div>  
        </div>
    </div>
  )
}

export default MenuItem