"use client"
import { useContext } from "react"
import { CartContext } from "../context"

export default function Shop(){
    
    const obj = useContext(CartContext)
    const arr = [
        {name:"Tops", id:1},
        {name:"Shirts", id:2},
        {name:"Pents", id:3},
        {name:"Glasses", id:4}
    ]
    console.log(obj)

    return (
        <div>
            <h1 className="text-left ml-4">Shopping</h1>
            <ol>
                {arr.map((val,i)=> {
                    return(
                        <li key={i}>{val.name} <span className="ml-5 cursor-pointer" onClick={()=> obj.add({name:val.name,id:val.id})}>Add To Cart</span></li>
                    )
                })}
            </ol>
        </div>
    )
}