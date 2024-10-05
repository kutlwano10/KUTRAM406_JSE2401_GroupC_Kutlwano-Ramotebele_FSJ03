

const getCategories = async () => {
  try {
    const res = await fetch(
      `https://shofy-app-flax.vercel.app/api/products/categories`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    console.log(data)
    return data;
    
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return []; 
  }
};

const Filter = async() => {
  const {categories} = await getCategories()

  return (
    <div>
      <h1 className="text-gray-800 text-2xl font-semibold pl-5 mb-4">Categories</h1>
      <button className="w-20 h-10 bg-[blue] text-white py-2 rounded-md mb-2 mt-4 hover:bg-[blue]">
        All
      </button>
      <div className="flex w-full gap-6 mb-8 lg:justify-center overflow-x-auto">
        {categories && categories.categories.map((category, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <h1 className="mt-2">{category}</h1> {/* Assuming category is just a string */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
