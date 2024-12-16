import { configureStore } from '@reduxjs/toolkit'
import productSlice from "@/app/store/slices/product"
import cartSlice from "@/app/store/slices/Cart"

export const store = configureStore({
    reducer:{
        productArray: productSlice,
        cartArray: cartSlice
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store