import { createSlice } from "@reduxjs/toolkit";


const categories = [{id:1 , name:'All'},
                    {id:2 , name:'Php'},
                    {id:3 , name:'JS'},
                    {id:4 , name:'Dot .net'},
                    ];

export const category = createSlice({
    name : "category",
    initialState : categories,
    reducers:{
        asc :(state , action) =>{

        }

    }
})


export default category.reducer