"use client"

import { useState } from "react";
import { CountContext } from "./context";
import { CartContext } from "./context";

interface Obj{
    id:number;
    name:string
}

export default function CountProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [count, setCount] = useState(0)
    const [cart,setCart] = useState<Obj[]>([])
    const add = (obj:Obj) =>setCart([...cart,obj])
    const del = (id:number)=> {
        const newCart = cart.filter((val) => val.id !== id)
        setCart([...newCart])
    }
    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <CartContext.Provider value={{cart,add,del}}>
                    {children}
                </CartContext.Provider>
            </CountContext.Provider>
        </div>
    )
}