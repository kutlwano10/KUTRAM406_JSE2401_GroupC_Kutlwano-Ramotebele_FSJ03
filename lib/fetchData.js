let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


export const fetchCategories = async () => {
  try {
    const res = await fetch(
      `${apiBaseUrl}/api/products/categories`,
      { cache:"force-cache" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    console.log(data)
    return data[0]?.categories || [];
     // Access categories array safely
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return [];
  }
};


/**
 * Fetches froducts from server 
 * 
 * @param {*} category 
 * @returns 
 */
const getProducts = async (category = 'all', skip = 0) => {
    try {
      const res = await fetch(`${apiBaseUrl}/api/products/?filter=${category}&skip=${skip}`,{cache: "force-cache"} );
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products", error);
      return [];
    }
  };
  
export default getProducts