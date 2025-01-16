import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <Link href={`/${id}`}>
      
          <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <p className="text-gray-900 font-bold mt-4">${price.toFixed(2)}</p>
          </div>
   
      </Link>
    </div>
  );
};

export default ProductCard;
