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
 * @throws Will throw an error if the fetching of products fails.
 */

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedLimit = searchParams.get("limit");
    const requestedFilter = searchParams.get("filter");

    //This set the limit to any number you want else it sets its default to 20
    const productsLimit = requestedLimit ? parseInt(requestedLimit, 10) : 20;

    const productsCollection = collection(db, "products");
    //i created a query with a limit default of 20
    const productsQuery = query(productsCollection, limit(productsLimit));
    const productsSnapshots = await getDocs(productsQuery);

    const productList = productsSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //Getting all Categories

    const categoriesCollection = collection(db, "categories");

    const categoriesSnapshots = await getDocs(categoriesCollection);

    const categoryList = categoriesSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //categoryList has only one document with the 'categories' field
    const categories = categoryList.length > 0 ? categoryList[0].categories : [];


    let filteredProducts;

    if(requestedFilter && categories.includes(requestedFilter)) {
        filteredProducts =productList.filter(product=>{
           return product.category === requestedFilter
        })
    }else {
        filteredProducts = productList
    }


    return NextResponse.json(filteredProducts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Products" },
      { status: 500 }
    );
  }
}
