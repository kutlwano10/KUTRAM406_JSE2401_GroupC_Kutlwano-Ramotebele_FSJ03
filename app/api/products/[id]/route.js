import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, { params }) {
  let { id } = params;
  
  try {
    // i used doc to get a single doc/product inside the products collection by id
    const productsRef = doc(db, "products", id);


    const productSnap = await getDoc(productsRef);


    if (productSnap.exists()) {
       let selectedProductById = {
        id: productSnap.id, //i am getting the Doc by id
        ...productSnap.data(),
      };
      return NextResponse.json(selectedProductById);
    }else {
        return NextResponse.json({error: "Product not found"}, {status:404})
    }
    
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Products" },
      { status: 500 }
    );
  }
}
