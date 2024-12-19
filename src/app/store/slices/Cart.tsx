import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface ProductState {
    name:string,
    category:string,
    qty:number
}

const initialState :ProductState[]=[]

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCart (state, {payload}){
            const obj = state.find((item) => item.name === payload.name)
            if(obj){
                obj.qty++
                const newState = state.filter((item) => item.name !== payload.name)
                state = [...newState, obj]
            }
            state.push(payload)
        },

        lessqty(state,{payload}){
            const obj = state.find((item) => item.name === payload.name)
            if(obj){
                obj.qty--
                const newState = state.filter((item) => item.name !== payload.name)
                state = [...newState, obj]
            }
        },
        deleteCart (state, {payload}){
            state.splice(payload,1)
        }
    },    
})

export const {addCart, deleteCart, lessqty} = cartSlice.actions  
export default cartSlice.reducer            