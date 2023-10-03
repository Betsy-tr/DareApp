import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "./data";

export const product = createSlice({
    name : "product",
    initialState : dataProducts,
    reducers:{

        asc: (state , action) =>{

            console.log('store asc')

            return state.sort((a , b) => a.price - b.price) // return state, classé par ordre croissant en comparant le prix du produit a et le prix du produit b

        },
        desc: (state , action) =>{

            return state.sort((a , b) => b.price - a.price) // return state, classé par ordre croissant en comparant le prix du produit b et le prix du produit a

        },
        init: (state , action) =>{

            return dataProducts 

        },

    }
})

export const { asc , desc , init } = product.actions

export default product.reducer