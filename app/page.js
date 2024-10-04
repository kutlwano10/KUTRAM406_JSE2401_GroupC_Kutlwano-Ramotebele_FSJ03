
import Filter from "./components/Filter";
import ProductPage from "./components/ProductList";

export default async function Home() {
  return (
    <div>
      <div className="px-2">
        <Filter/>
      </div>
      <div>
        <ProductPage />
      </div>
    </div>
  );
}
