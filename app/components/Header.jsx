"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "../public/cart.svg";
import menu from "../public/menu-4.svg";
import search from "../public/search.svg";
// import dashboard from "../public/dashboard.svg";
// import Footer from "./Footer";
// import Modal from "./CartModal";
// import { useCart } from "../CartContext";

const Header = () => {
  // const [totalItemsInCart,setTotalItemsInCart] =useState(null)
  // const { cartItems } = useCart();
  // const toggleNavbar = () => {
  //   const dropDown = document.getElementById("navbar-dropdown");
  //   dropDown.classList.contains("hidden")
  //     ? dropDown.classList.remove("hidden")
  //     : dropDown.classList.add("hidden");
  // };

  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };


  // useEffect(()=>{
  //   const totalItemsInCart1 = cartItems.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );

  //   setTotalItemsInCart(totalItemsInCart1);
  // },[])
  


  return (
    <>
      <header className=" w-full fixed top-0 bg-white shadow-md z-10">
        <nav className="flex justify-between items-center  px-4 md:p-[8%] py-3 md:py-6">
          <Image  className="w-7" src={menu} alt="" />

          <Link
            href="/"
            className="pl-8 text-[#87e64b] font-extrabold text-3xl  md:text-5xl"
          >
            Shofy
          </Link>

          <div className=" flex items-center  md:gap-4">
            {/* Login */}
            <Link href="">
              <Image className=" w-6" src={search} alt="" />
            </Link>
             
            <Link href="/profile">
           <button className="w-12 h-8 bg-[blue] text-white rounded-md text  hover:bg-[blue]"> Profile</button >
            {/* <Image className=" w-8" src={dashboard} alt="" /> */}
            </Link>
            {/* cart */}
            <button  className="relative cursor-pointer">
              {/* {console.log(totalItemsInCart)} */}

              <div className="t-0 absolute left-3 -top-4">
                
                  <p className="flex h-2 w-2 items-center  justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    2
                  </p>
              
              </div>

              <Image className="w-7 " src={cart} alt="" />
            </button>
          </div>
        </nav>
        {/* Menu sidebar */}
        {/* <div className="w-full hidden " id="navbar-dropdown">
          <Footer />
        </div> */}
        {/* Cart Modal */}
        {/* <Modal isOpen={isCartOpen} onClose={toggleCart} /> */}
      </header>
    </>
  );
};

export default Header;
