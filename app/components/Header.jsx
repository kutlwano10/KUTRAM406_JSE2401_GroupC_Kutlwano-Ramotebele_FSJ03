"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "../public/cart.svg";
import menu from "../public/menu-4.svg";
import search from "../public/search.svg";
import logo from "../public/logo.png";
import InstallPwaButton from "./InstallPwaButton";
import profile from "../public/profile.svg";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log({user})

  // if (!user) {
  //   router.push("/sign-up");
  // }

  return (
    <>
      <header className=" w-full fixed top-0 bg-white shadow-md z-10">
        <nav className="flex justify-between items-center  px-4 md:p-[8%] py-4 md:py-6">
          <Image className="w-7" src={menu} alt="" />
          <InstallPwaButton />

          <Link href="/" className="">
            <Image
              className="object-cover w-28"
              priority="true"
              alt="logo"
              src={logo}
              width=""
              height=""
            />
          </Link>

          <div className=" flex items-center  md:gap-4">
            {/* Login */}
            <Link
              className="text-center flex justify-center flex-col items-center"
              href="/sign-in"
            >
              <Image className=" w-6" src={profile} alt="" />
              {/* {!user ? <p>sign out</p> : <p onClick={router.push('/sign-in')}>Sign In</p>} */}
            </Link>

            <button onClick={() => signOut(auth)}>Sign out</button>
            {/* cart */}
            <button className="relative cursor-pointer">
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
