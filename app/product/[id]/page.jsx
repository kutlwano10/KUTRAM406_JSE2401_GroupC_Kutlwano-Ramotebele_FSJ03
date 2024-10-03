import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Back from "../../public/turn-back2.png"

export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res) {
      throw new Error("Response Failed");
    }
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("failed to Fetch Product", error);
  }
};

const ProductDetails = async ({ params }) => {
  
  const  {product}  = await fetchProductById(params.id);
  return (
    <main>
      
      <div className="mt-20 ml-10 w-14">
        <Link href="/">
          <Image src={Back} alt="turn-back" priority width={30} height={30} />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
            priority = "true"
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-500 mb-4">{product.category}</p>
              <p className="text-3xl font-bold text-[#87e64b] mb-6">
                R {product.price}
              </p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              {product.tags && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#87e64b] text-gray-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-[#87e64b] hover:bg-[#2a4b15] text-white py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg transition duration-300">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
