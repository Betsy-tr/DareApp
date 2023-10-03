import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "./data";

export const product = createSlice({
    name : "product",
    initialState : dataProducts,
    reducers:{

    }
})

export default product.reducer