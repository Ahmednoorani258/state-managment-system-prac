"use client"
import{useContext} from "react"
import { CountContext } from "./context";
import Shop from "./components/shop";
export default function Home() {
  const obj = useContext(CountContext)
  
  
  return (
   <div className="min-h-screen flex flex-col justify-center items-center">
    {/* <>
    <h1 className="text-4xl">  Context Api</h1>
    <div className="flex p-12 gap-8 justify-center items-center">
    <button onClick={()=> obj.setCount(++obj.count)} className="bg-green-300 p-2 text-black rounded-xl">+</button>
    <p>{obj.count}</p>
    <button onClick={()=> obj.setCount(--obj.count)} className="bg-red-300 p-2 text-black rounded-xl">-</button>
    </div>
    
    </> */}

    <h1 className="text-4xl">  Context Api</h1>
    <h1 className="text-4xl"> Shopping (Cart Functionality)</h1>
    <div className="flex p-12 gap-8 justify-center items-center">
      <Shop/>
    </div>
    
  </div>
  );
}
