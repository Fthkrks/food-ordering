import Title from "../UI/Title"
import CustomerItem from "./CustomerItem"
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Customers = () => {


  const NextArrow = ({onClick}) =>{
    return(
      <button className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center absolute -bottom-12 left-1/2 bg" onClick={onClick} >
        <IoIosArrowForward />
      </button>
    )
  }


  const PrevArrow = ({onClick}) =>{
    return(
      <button className="bg-primary text-white rounded-full w-10 h-10 flex justify-center mr-2
      items-center absolute -bottom-12 right-1/2 bg" onClick={onClick} >
        <IoIosArrowBack />
      </button>
    )
  }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autospeed: 3500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive:[{
      breakpoint: 768,
      settings:{
        slidesToShow: 1,

      }
    }]

  };
  
  return (
    <div className="container mx-auto my-20">
      <Title classname="text-[40px] text-center">What Says Our Customers</Title>
        <Slider {...settings}>
        <CustomerItem imgsrc={"/images/client1.jpg"}/>
        <CustomerItem imgsrc={"/images/client2.jpg"}/>
        <CustomerItem imgsrc={"/images/client1.jpg"}/>
        <CustomerItem imgsrc={"/images/client2.jpg"}/>
        </Slider>

      </div>

  )
}

export default Customers