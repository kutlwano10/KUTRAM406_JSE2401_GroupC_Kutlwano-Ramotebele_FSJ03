import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";

/**
 * Fetches a single product by its ID from the Firestore database.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} context - Context containing the request parameters, including the product ID.
 * @returns {Promise<NextResponse>} - A promise that resolves to a Next.js response object containing the product.
 *
 * @throws Will throw an error if fetching the product fails or the product is not found.
 */

export async function GET(req, {params}) {
  try {
    let { id } = params;
    console.log(`Original requested ID: ${id}`);

    // Pad the ID with leading zeros if necessary
    id = id.padStart(3, '0');
    console.log(`Padded ID for Firestore query: ${id}`);

    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    console.log(`Document exists: ${productSnap.exists()}`);
    
    if (!productSnap.exists()) {
      console.log(`Product with ID ${id} not found`);
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const productData = productSnap.data();
    console.log('Raw product data:', productData);

    if (!productData) {
      console.log(`Product with ID ${id} exists but has no data`);
      return NextResponse.json(
        { error: "Product exists but has no data" },
        { status: 500 }
      );
    }

    const product = {
      id: productSnap.id,
      ...productData,
    };

    console.log('Processed product:', product);

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch Product", details: error.message },
      { status: 500 }
    );
  }
}
