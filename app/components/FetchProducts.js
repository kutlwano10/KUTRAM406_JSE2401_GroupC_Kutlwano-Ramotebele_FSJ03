/**
 * Fetches froducts from server 
 * 
 * @param {*} category 
 * @returns 
 */
const getProducts = async (category = 'all' ) => {
    try {
      const res = await fetch(`https://shofy-app-flax.vercel.app/api/products/?filter=${category}`,{cache: "force-cache"} );
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