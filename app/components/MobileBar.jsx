"use client"
import Image from "next/image";
import category from "../public/category.svg";
import search from "../public/search2.svg";
import wishlist from "../public/wishlist.svg";
import user from "../public/user.svg";
import Link from "next/link";
import { auth } from "@/lib/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";


export default function MobileBar() {
  // const [user] = useAuthState(auth)
  // const router = useRouter()

  // console.log({user})

  return (
    <div className="sticky bottom-8 mx-8">
      <div className="justify-center rounded-3xl px-2 w-full bg-white shadow-md z-10 md:hidden ">
        <div className="flex justify-between items-center text-center p-4">
          <div className="text-center flex flex-col items-center">
            <Link href={""}>
              <Image className=" w-6" src={category} alt="" />
            </Link>
            <p className="text-[12px]">Categories</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Link href={""}>
              <Image className=" w-6" src={search} alt="" />
            </Link>
            <p className="text-[12px]">Search</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Link href="">
              <Image className=" w-6" src={wishlist} alt="" />
            </Link>
            <p className="text-[12px]">Wishlist</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <button >
              <Image className=" w-6" src={user} alt="" />
            </button>
            <p className="text-[12px]">sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
