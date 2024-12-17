"use client"

import React from 'react'
import { useAppSelector } from '@/app/store/hooks'
export const ProductsList = () => {

const products = useAppSelector(state => state.productArray)

  return (
    <div>
        {products.map((item,i) => {
            return(
                <div key={i}>
                    <h1>{item.name}</h1>
                    <h1>{item.size}</h1>
                </div>
            )
        })}
    </div>
  )
}
