import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState:[],
    reducers:{
        addProduct (state, action){},
        deleteProduct (state, action){}
    },    
})

export const {addProduct, deleteProduct} = productSlice.actions  
export default productSlice.reducer