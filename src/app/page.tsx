import { ProductsList } from "@/components/ProductsList";

export default function Home() {


  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-cyan-800">
      <div className="text-7xl">Redux Learning</div>
      <ProductsList/>
    </div>
  );
}
