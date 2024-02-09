import Image from "next/image"
import Title from "./UI/Title"

const About = () => {
  return (
    <div className=" bg-secondary w-full  ">
        <div className="container text-white mx-auto py-14 flex sm:flex-nowrap flex-wrap justify-between items-center gap-20">
            
            <div className="relative sm:w-[445px] w-[300px]    h-[500px]">
                <Image src="/images/about-img.png" alt="" layout="fill" priority />
            </div> 

            <div>
                <Title classname="text-[40px]">We Are Feare</Title>
                <p className="py-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ipsum tempora iure dolores velit quis possimus molestias minima aliquid voluptates quos.
                </p>
                <button className="btn-primary">Read More</button>
            </div>

        </div>

    </div>
  )
}

export default About