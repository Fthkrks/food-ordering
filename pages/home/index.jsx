import About from "@/components/About"
import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import Reservation from "@/components/Reservation"
import Customers from "@/components/customers/Customers"
import MenuWrapper from "@/components/product/MenuWrapper"


const Home = ({categoryList}) => {

  return (
    <div>
      <Carousel />
      <Campaigns/>
      <MenuWrapper categoryList = {categoryList} />
      <About/>
      <Reservation/>
      <Customers/>
    </div>
  )
}

export default Home