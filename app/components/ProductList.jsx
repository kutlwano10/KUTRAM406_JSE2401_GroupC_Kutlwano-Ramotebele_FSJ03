import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res) {
      throw new Error("Failed to Fetch Response");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("failed to fetch Products", error);
  }
};

const ProductList = async () => {
  const products = await getProducts();
  return (
    <>
    <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
      {/* Show skeleton loaders when products are still loading */}
      
      {products.length < 0 ? (
        // Render 10 skeleton loaders to match the grid layout
        Array(10).fill(0).map((_, idx) => <SkeletonLoader key={idx} />)
      ) : (
        // Render actual products once they're loaded
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </div>
    </>
  )
  
};

export default ProductList;
