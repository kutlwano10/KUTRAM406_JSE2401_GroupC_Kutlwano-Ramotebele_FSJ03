"use client";

import dynamic from "next/dynamic";
import ProductWrapper from "./components/ProductWrapper";
import { useState } from "react";
// import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { useRouter, useSearchParams } from "next/navigation"; // This handles client-side navigation

const ProductList = dynamic(()=> import("./components/ProductList"), {ssr: false})

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();
  // const searchParams = useSearchParams();

  // Read category from URL query params
  // const category = searchParams.get("filter") || "all";

  // Handler to change category and push new URL
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    router.push(`/?filter=${category}`);
  };

  return (
    <div>
      {/* Filter handles the category change */}
      <Filter onCategoryChange={handleCategoryChange} />

      {/* Server-side ProductList fetching */}
      <ProductWrapper>
        <ProductList category={selectedCategory} />
      </ProductWrapper>
    </div>
  );
};

export default Home;
