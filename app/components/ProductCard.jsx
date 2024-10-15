"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import favorite from "../public/favorite.svg";
import cart from "../public/cart.svg";
import placeholder from "../public/placeholder.png";
const ProductCard = (props) => {
  const { title, images, price, category, id } = props;

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5  overflow-hidden">
      <div className="flex align-center p-2">
        <button className="relative left-[85%]">
          {/*  */}
          <Image width={30} height={30} src={favorite} alt="" />
        </button>
      </div>

      <Link href={`/product/${id}`} className="flex bg-white justify-center">
        {/* Display placeholder while image is loading */}
        {isLoading && (
          <Image
            priority="true"
            className="object-cover"
            src={placeholder} // Placeholder image
            alt="Loading..."
            width={300}
            height={100}
          />
        )}

        <Image
          className={`object-cover ${isLoading ? "hidden" : ""}`} // Hide the image until it's loaded
          priority="true"
          alt={title}
          src={images[0]} // Actual product image
          width={300}
          height={100}
          onLoad={handleImageLoad} // Trigger loading state change
        />
      </Link>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex-1">
          <header className="mb-2 flex-2">
            <h2 className="text-sm line-clamp-2 font-extrabold leading-snug">
              <div className="text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                <Link href="">{title}</Link>
              </div>
            </h2>
          </header>

          <div className="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug">
            <h2>R{price}</h2>
          </div>
        </div>

        <div className="flex mt-1 space-x-2">
          <div className="justify-start flex-1">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {category}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-3 space-x-2">
          <button>
            <Image className="w-8" width={100} height={100} src={cart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
