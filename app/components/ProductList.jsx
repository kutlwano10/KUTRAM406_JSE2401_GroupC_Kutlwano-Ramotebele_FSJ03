import { Suspense } from "react";
import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";

export const getProducts = async () => {
  try {
    const res = await fetch("https://shofy-app-flax.vercel.app/api/products", {cache: "no-store"});
    if (!res) {
      throw new Error("Failed to Fetch Response");
    }
    const data = await res.json();
//   console.log(data[0])
    return data;
  } catch (error) {
    console.error("failed to fetch Products", error);
  }
};

const ProductList = async () => {
  const products = await getProducts();

  if (!products) {
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
    <>
      <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

const ProductPage = () => {
  return (
    <Suspense
      fallback={
        <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
      }
    >
      <ProductList />
    </Suspense>
  );
};

export default ProductPage;
