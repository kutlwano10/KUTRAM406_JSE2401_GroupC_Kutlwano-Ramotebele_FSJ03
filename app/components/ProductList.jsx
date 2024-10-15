"use client";
import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";
import getProducts from "../../lib/fetchData";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); // Track current page
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true);
  const [displayLimit, setDisplayLimit] = useState(0);
  const [user, userLoading] = useAuthState(auth); // userLoading is added to track auth state

  const router = useRouter();
  const searchParams = useSearchParams();

  // Read category from URL query params
  const category = searchParams.get("filter") || "all";

  // Handler to change category and push new URL
  const handleCategoryChange = (newCategory) => {
    router.push(`/?filter=${newCategory}`);
    setProducts([]);
    setPage(0);
    setDisplayLimit(20);
    setHasMore(true);
  };

  const fetchProducts = async () => {
    if (loading || !hasMore) return; // Prevent fetching if already loading or no more products

    setLoading(true); // Start loading
    try {
      const data = await getProducts(category, page * displayLimit);

      // If it's the first page, set products directly; otherwise, append them
      if (page === 0) {
        setProducts(data); // Set products for the first page
      } else {
        setProducts((prev) => [...prev, ...data]); // Append new products for subsequent pages
      }

      // Check if fetched data length is less than limit to set hasMore
      if (data.length < displayLimit) {
        setHasMore(false); // No more products to fetch
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products only if there's more to load
  }, [category, page, displayLimit]);

  const handleShowMore = () => {
    if (hasMore) {
      setDisplayLimit((prev) => prev + 20); // Increment display limit to show more products
      setPage((prev) => prev + 1);
    }
  };

  if (loading) {
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
    <div className="">
      <h1 className="p-2">
        <span className="text-orange-500 text-xl">Welcome Back </span>🥳,{" "}
        {!userLoading && user ? user.email : "Guest"}
      </h1>
      <Filter onCategoryChange={handleCategoryChange} />
      <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {hasMore && (
        <div className="w-full justify-center  flex items-center">
          <button
            onClick={handleShowMore}
            className=" text-center mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
