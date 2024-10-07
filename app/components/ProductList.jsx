"use client"
import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";
import getProducts from "./FetchProducts";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


const ProductList =  () => {
  const [products, setProducts] = useState([])

  const router = useRouter();
  const searchParams = useSearchParams();

  // Read category from URL query params
  const category = searchParams.get("filter") || "all";

  // Handler to change category and push new URL
  const handleCategoryChange = (category) => {
    // setSelectedCategory(category)
    router.push(`/?filter=${category}`);
    // window.location.search = `?filter=${category}`; 
  };

  useEffect(()=> {
    const FetchProducts = async()=> {
        try {
          const data = await getProducts(category)
        setProducts(data)
        } catch (error) {
          console.error(error)
          
        }
    }
    FetchProducts()
  }, [category])
  


  if (!products || products.length === 0) {
    return (
      <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>
    );
  }

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;