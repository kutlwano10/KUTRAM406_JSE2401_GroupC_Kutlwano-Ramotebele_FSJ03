"use client";

import dynamic from "next/dynamic";
import ProductWrapper from "./components/ProductWrapper";
// import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { useRouter, useSearchParams } from "next/navigation"; // This handles client-side navigation

const ProductList = dynamic(()=> import("./components/ProductList"), {ssr: false})

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read category from URL query params
  const category = searchParams.get("filter") || "all";

  // Handler to change category and push new URL
  const handleCategoryChange = (selectedCategory) => {
    router.push(`/?filter=${selectedCategory}`);
  };

  return (
    <div>
      {/* Filter handles the category change */}
      <Filter onCategoryChange={handleCategoryChange} />

      {/* Server-side ProductList fetching */}
      <ProductWrapper>
        <ProductList category={category} />
      </ProductWrapper>
    </div>
  );
};

export default Home;
