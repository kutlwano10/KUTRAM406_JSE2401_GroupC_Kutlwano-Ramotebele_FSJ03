import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, getDocs, query, limit } from "firebase/firestore";

/**
 * Fetches a list of products from the Firestore database.
 *
 * @param {Request} req - The incoming HTTP request.
 * @returns {Promise<NextResponse>} - A promise that resolves to a Next.js response object containing the products.
 *
 * @example
 * const response = await fetch('/api/products');
 * const products = await response.json();
 *
 * @throws Will throw an error if the fetching of products fails.
 */

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedLimit = searchParams.get("limit");

    const productsLimit = requestedLimit ? parseInt(requestedLimit, 10) : 20;

    const productsCollection = collection(db, "products");
    //i created a query with a limit default of 20
    const productsQuery = query(productsCollection, limit(productsLimit));

    const productsSnapshots = await getDocs(productsQuery);
    const productList = productsSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(productList);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Products" },
      { status: 500 }
    );
  }
}
