import { useState } from "react";
import Logo from "../UI/Logo"
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import Search from "../UI/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";



const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);

    const cart = useSelector((state) =>state.cart);

    const router = useRouter();

  return (
    <div className={`h-[5.5rem] z-50 ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}>
        <div className="container mx-auto flex justify-between items-center h-full text-white">
            <div className="z-50">
                    <Logo/>
            </div>
            <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen z-50 sm:text-white text-black  sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!flex "}`}>   
                <ul className="flex gap-x-2 sm:flex-row  flex-col justify-center  items-center  w-full  h-full">
                    <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
                        <Link href="/">HOME</Link>
                    </li> 
                    <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
                        <Link href="/Menu">MENU</Link>
                    </li>
                    <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
                        <Link href="/reservation">BOOK TABLE</Link>
                    </li>
                </ul>
                {isMenuModal && (
                    <div>
                        <button className='absolute text-black top-4 right-4 z-50 cursor-pointer'>
                            <IoIosCloseCircle size={30} className='hover:text-primary' onClick={() => (setIsMenuModal(!isMenuModal))} />
                        </button>
                    </div>
                )}


            </nav>
            <div className=" flex items-center gap-x-4 z-50">
            <Link href="/auth" className="hover:text-primary transition-all">
                <FaUser/>    
            </Link>
            <Link href = "/cart" className="hover:text-primary transition-all">
                <span className="relative">
                    <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
                    <span className="w-4 h-4 text-xs flex items-center justify-center absolute -top-2 -right-3 font-bold text-black rounded-full bg-primary">{cart.products.length === 0 ? "0" :cart.products.length}</span>
                    
                </span>

            </Link>
            <a className="hover:text-primary transition-all cursor-pointer" onClick={() =>(setIsSearch(!isSearch))} >
                <FaSearch />
            </a>
            <a onClick={() =>(setIsMenuModal(!isMenuModal))}>
                <GiHamburgerMenu className="text-xl md:hidden visible hover:text-primary transition-all cursor-pointer" />
            </a>
            <a href="#" >
                <button className="btn-primary md:inline-block hidden ">Order Online</button>
            </a>
            </div>
        </div>
        {isSearch && (
            <Search setIsSearch={setIsSearch} isSearch ={isSearch}/>
        )}

    </div>
  )
}

export default Header