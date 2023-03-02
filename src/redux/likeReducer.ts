import { createSlice } from "@reduxjs/toolkit";


type likeProductType = {
    [id:number]: boolean
}

export const initialState: likeProductType = {
    1: true,
    2: true,
}


export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload] : true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload] : false,
        }),
    },
})

export const {addLike, removeLike}=likeSlice.actions

export default likeSlice.reducer