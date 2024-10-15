"use client";
import { useEffect, useState } from "react";
import meat from "../public/meat.jpg"
import Image from "next/image"
import { fetchCategories } from "@/lib/fetchData";

const Filter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

 useEffect(()=> {
  const getCategories =async ()=> {
    const data = await fetchCategories()
    setCategories(data)
  }
  getCategories()
 }, [])
 

  return (
    <div className="px-3">
      <h1 className="text-gray-800 text-2xl font-semibold pl-5 mb-4">
        Categories
      </h1>
      <button
        onClick={() => onCategoryChange("all")}
        className="w-10 h-10 bg-orange-600 text-white py-2 rounded-md mb-2 mt-4 hover:bg-orange-500"
      >
        All
      </button>
      <div className="flex w-full gap-6 mb-8 lg:justify-center overflow-x-auto ">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onCategoryChange(category)}
            className="flex-shrink-0 text-center cursor-pointer"
          >
            <Image
              className="w-14 h-14 object-cover rounded-full mx-auto"
              src={meat}
              alt="category"
            />
            <h1 className="mt-2">{category}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
