import Image from "next/image"


const CustomerItem = ({imgsrc}) => {

  return (
    <div className="mt-5 mx-4">
        <div className="p-6 bg-secondary text-white rounded-[5px]">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque, incidunt possimus accusamus perspiciatis quos!</p>

        <div className="flex flex-col mt-4">
            <span className="text-lg font-semibold ">Moana Michell</span>
            <span className="text-[15px]">magna aliqua</span>
        </div>
        </div>
        <div className="relative w-28 h-28 rounded-full flex justify-center mt-7
        border-4 border-primary before:content-[''] before:-translate-y-4 before:rotate-45 before:bg-primary before:w-5 before:h-5">
            <Image src={imgsrc} alt="" layout="fill" objectFit="contain" className="rounded-full" priority  />
        </div>
    </div>
  )
}

export default CustomerItem