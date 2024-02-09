import Image from "next/image"
import Title from "./UI/Title"
import { MdShoppingCart } from "react-icons/md";

const CampaignsItem  = () =>{
  return (
    <div className=" flex items-center bg-secondary flex-1 rounded-md py-5 px-[15px] gap-x-4">
    <div className=" p-10 relative sm:w-44 md:h-44 w-36 h-36 border-[5px] border-[#ffbe33]  rounded-full overflow-hidden">
        <Image className="rounded-full hover:scale-105 transition-all" src="/images/o1.jpg" alt="" layout="fill" objectFit="cover" />
    </div>
    <div className="text-white">
    <Title classname="text-2xl">Tasty Thursday</Title>
    <div className=" font-dancing my-2">
      <span className="text-[40px]">20%</span>
      <span className="text-sm  ml-1">Off</span>

    </div>
    <button className="btn-primary flex items-center gap-x-2">
        Order Now <MdShoppingCart size={20} />  
      </button>    
    </div>        
</div>
  )

}

const Campaigns = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-between container mx-auto py-20">
        <CampaignsItem/>
        <CampaignsItem/>
    </div>
  )
}

export default Campaigns