
import { Products,products } from "./data/data";
import ProductCard from "./components/Card";


export default function Home() {


  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">Products</h1>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:Products) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
    </div>
    
  );
}
