"use client"
import { useContext } from "react"
import { CartContext } from "../context"
export default function Cart() {
    const obj = useContext(CartContext)
    return (
        <div className="min-h-screen">
            <div>
                <h1 className="text-left ml-4">Shopping</h1>
                <ol>
                    {obj.cart[0] &&
                        obj.cart.map((val: any, i: number) => {
                            return (
                                <li key={i}>{val.name} <span className="ml-5 cursor-pointer" onClick={() => obj.add({ name: val.name, id: val.id })}>Add To Cart</span> <span className="cursor-pointer ml-5" onClick={() => obj.del(val.id)}>Delete From Cart</span></li>
                            )
                        })}
                </ol>
            </div>
        </div>
    )
}