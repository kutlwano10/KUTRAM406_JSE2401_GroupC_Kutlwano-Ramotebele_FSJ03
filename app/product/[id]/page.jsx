"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Back from "../../public/turn-back2.png";
import AddReviewForm from "@/app/components/ReviewForm";
import { useEffect, useState } from "react";

let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${apiBaseUrl}/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Response Failed");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch product", error);
    return null; // Return null in case of error
  }
};

const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  // Fetch product data when the component mounts
  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProductById(params.id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setReviews(fetchedProduct.reviews || []); // Set initial reviews
      } else {
        setError("Product not found");
      }
    };
    loadProduct();
  }, [params.id]);

  // Handle review deletion
  const handleDelete = async (reviewerEmail) => {
    setError(null);
    try {
      const res = await fetch(`/api/products/${product.id}/reviews`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewerEmail }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete review");
      }

      // Update reviews state after successful deletion
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.reviewerEmail !== reviewerEmail)
      );
      alert("Review deleted successfully!");
    } catch (error) {
      console.error("Error deleting review:", error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>; // Add loading state
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
            {product.images && (
              <Image
                priority="true"
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
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
          {reviews.map((item) => (
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
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(item.reviewerEmail)} // Handle review deletion
                >
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


