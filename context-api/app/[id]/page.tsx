
import Image from 'next/image';
import { Products, products } from '@/app/data/data'; // Adjust the import path as needed
import { useCart } from '@/app/context';


const ProductPage= async ({ params }:{params:{id:Promise<string>}}) => {
  const id = await params.id
  const {addToCart} = useCart()
  
  const product = products.find((p:Products) => p.id.toString() === id);
  
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto bg-white min-h-screen p-4">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={product?.image} alt={product?.name} width={500} height={400} className="rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-900 font-bold text-xl mt-4">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;
