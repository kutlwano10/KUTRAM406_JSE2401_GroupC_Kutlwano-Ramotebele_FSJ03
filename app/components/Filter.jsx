"use client";
import { useEffect, useState } from "react";
import meat from "../public/meat.jpg"
import Image from "next/image"

const Filter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/categories`,
          { cache: "no-store" }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        setCategories(data[0]?.categories || []); // Access categories array safely
      } catch (error) {
        console.error("Failed to fetch categories", error);
        return [];
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h1 className="text-gray-800 text-2xl font-semibold pl-5 mb-4">
        Categories
      </h1>
      <button
        onClick={() => onCategoryChange("all")}
        className="w-20 h-10 bg-[blue] text-white py-2 rounded-md mb-2 mt-4 hover:bg-[blue]"
      >
        All
      </button>
      <div className="flex w-full gap-6 mb-8 lg:justify-center overflow-x-auto">
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
