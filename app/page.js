export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res) {
      throw new Error("Failed to Fetch Response");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("failed to fetch Products", error);
  }
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Data here</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
}
