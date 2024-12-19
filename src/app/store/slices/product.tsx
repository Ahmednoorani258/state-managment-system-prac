import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    name:string,
    size:number
}

const initialState:ProductState[]   = [{name:"shoe",size:10}]

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProduct (state, action){
            
        },
        deleteProduct (state, action){}
    },    
})

export const {addProduct, deleteProduct} = productSlice.actions  
export default productSlice.reducer