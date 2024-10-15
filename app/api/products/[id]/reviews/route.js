import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

/**
 * Fetches a single product by its ID from the Firestore database.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} context - Context containing the request parameters, including the product ID.
 * @returns {Promise<NextResponse>} - A promise that resolves to a Next.js response object containing the product.
 *
 * @throws Will throw an error if fetching the product fails or the product is not found.
 */


/**
 * Adds a new review to a product.
 */
export async function POST(req, { params }) {
    console.log('123')
  let { id } = params;

  id = id.padStart(3, '0');

  const { reviewerName, reviewerEmail, comment, rating } = await req.json();
  console.log(reviewerName,reviewerEmail,comment,rating)

  if (!reviewerName || !reviewerEmail || !comment || typeof rating !== "number") {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const review = {
      reviewerName,
      reviewerEmail,
      comment,
      rating,
      date: new Date().toISOString(),
    };

    // Add the new review to the reviews array
    await updateDoc(productRef, {
      reviews: arrayUnion(review),
    });

    return NextResponse.json({ message: "Review added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json(
      { error: "Failed to add review", details: error.message },
      { status: 500 }
    );
  }
}

/**
 * Edits an existing review in a product.
 */
// export async function PATCH(req, { params }) {
//   const { id } = params;
//   const { reviewerEmail, newComment, newRating } = await req.json();

//   if (!reviewerEmail || (!newComment && typeof newRating !== "number")) {
//     return NextResponse.json(
//       { error: "Missing required fields" },
//       { status: 400 }
//     );
//   }

//   try {
//     const productRef = doc(db, "products", id);
//     const productSnap = await getDoc(productRef);

//     if (!productSnap.exists()) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     const productData = productSnap.data();
//     const updatedReviews = productData.reviews.map((review) => {
//       if (review.reviewerEmail === reviewerEmail) {
//         return {
//           ...review,
//           comment: newComment || review.comment,
//           rating: typeof newRating === "number" ? newRating : review.rating,
//         };
//       }
//       return review;
//     });

//     await updateDoc(productRef, { reviews: updatedReviews });

//     return NextResponse.json({ message: "Review updated successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     return NextResponse.json(
//       { error: "Failed to update review", details: error.message },
//       { status: 500 }
//     );
//   }
// }

/**
 * Deletes an existing review from a product.
 */
export async function DELETE(req, { params }) {
  let { id } = params;

  id = id.padStart(3, '0');
  const { reviewerEmail } = await req.json();

  if (!reviewerEmail) {
    return NextResponse.json(
      { error: "Missing reviewerEmail field" },
      { status: 400 }
    );
  }

  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const productData = productSnap.data();
    const reviewToDelete = productData.reviews.find(
      (review) => review.reviewerEmail === reviewerEmail
    );

    if (!reviewToDelete) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    await updateDoc(productRef, {
      reviews: arrayRemove(reviewToDelete),
    });

    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { error: "Failed to delete review", details: error.message },
      { status: 500 }
    );
  }
}