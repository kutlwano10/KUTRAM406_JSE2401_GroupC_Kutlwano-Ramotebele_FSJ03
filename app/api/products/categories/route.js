import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import {
  collection,
  getDocs,
  query,
  limit,
  filter,
  getDoc,
  where,
} from "firebase/firestore";

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
 * @throws Will throw an error if the fetching of categories fails.
 */

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedLimit = searchParams.get("limit");
    const requestedFilter = searchParams.get("filter");

    //Getting all Categories

    const categoriesCollection = collection(db, "categories");

    const categoriesSnapshots = await getDocs(categoriesCollection);

    const categoryList = categoriesSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //categoryList has only one document with the 'categories' field
    const categories = categoryList.length > 0 ? categoryList[0].categories : [];
    console.log(categories)

    return NextResponse.json(categoryList);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Categories" },
      { status: 500 }
    );
  }
}