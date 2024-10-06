"use client"
import { useState , Suspense} from "react";
import SkeletonLoader from "./components/ProductSkeleton";
import ProductList from "./components/ProductList";
import Filter from './components/Filter';
import { useRouter, useSearchParams } from 'next/navigation'; // This handles client-side navigation

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Read category from URL query params
  const category = searchParams.get('filter') || 'all';

  // Handler to change category and push new URL
  const handleCategoryChange = (selectedCategory) => {
    router.push(`/?filter=${selectedCategory}`);
  };

  return (
    <div>
      {/* Filter handles the category change */}
      <Filter onCategoryChange={handleCategoryChange} />

      {/* Server-side ProductList fetching */}
      <Suspense fallback={<div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>}>
        <ProductList category={category} />
      </Suspense>
    </div>
  );
};

export default Home;

