import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, getDocs, query,limit } from "firebase/firestore";


export async function GET () {
    try {


        const productsCollection = collection(db, "products")

        const productsQuery = query(productsCollection, limit(20))

        const productsDoc = await getDocs(productsQuery)
        const productList = productsDoc.docs.map(doc=> ({
            id: doc.id, 
            ...doc.data()
        }))

        return NextResponse.json(productList)
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch Products"}, {status: 500})
        
    }
}



