import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Back from "../../public/turn-back2.png";
import AddReviewForm from "@/app/components/ReviewForm";

export const fetchProductById = async (id) => {
  try {
    const res = await fetch(
      `https://shofy-app-flax.vercel.app/api/products/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Response Failed");
    }
    console.log(res);
    const data = await res.json();
    console.log("This is the results", data);

    return data;
  } catch (error) {
    console.error("failed to Fetch Product", error);
  }
};

const ProductDetails = async ({ params }) => {
  const product = await fetchProductById(params.id);

  if (!product) {
    return (
      <main>
        <div className="max-w-6xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-2">Product not found</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="mt-20 ml-10 w-14">
        <Link href="/">
          <Image
            src={Back}
            alt="turn-back"
            priority="true"
            width={30}
            height={30}
          />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              priority="true"
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={400}
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
        {/* Add Review Form */}
      <h2 className="text-lg font-semibold mt-8">Add a Review</h2>
      <AddReviewForm productId={product.id} />
        <div className="space-y-4 pt-10">
          {product.reviews.map((item) => (
            <div
              key={item.reviewerEmail}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white relative"
            >
              <div className="absolute top-4 right-4 flex space-x-2">
                {/* Edit Icon */}
                <button className="text-blue-500 hover:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5h2v2h-2zM11 11h2v2h-2zM11 17h2v2h-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M3 14h18"
                    />
                  </svg>
                </button>

                {/* Delete Icon */}
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <h1 className="text-lg font-semibold text-gray-800">
                {item.reviewerName}
              </h1>
              <p>{item.comment}</p>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">{item.rating} ★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
