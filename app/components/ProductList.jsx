import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";

// Ensure that this component is a Server Component
const getProducts = async (category = 'all' ) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/?filter=${category}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
};

const ProductList = async ({ category }) => {
  const products = await getProducts(category);

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
    <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;