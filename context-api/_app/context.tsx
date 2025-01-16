"use client"
import { createContext } from "react"

interface Count {
    [x: string]: any;

}

interface Cart {
    [x:string]:any
}
export const CountContext = createContext({} as Count)
export const CartContext = createContext({} as Cart)