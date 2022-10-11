import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
const initialState={
    list:[],
    isLoading: null,
}

const postSlice = createSlice({
   name:"post",
   initialState,
   reducers:{
       resetData:(state)=>{
           state.list=[];
           state.isLoading=null;
       }
   },
    extraReducers: (builder) => {
        builder.addCase(getDataThunk.pending,(state)=>{
            state.isLoading= false;
        }).addCase(getDataThunk.fulfilled,(state, action)=>{
            state.isLoading = true;
            state.list=action.payload;
        })
    }
});

export const getDataThunk = createAsyncThunk("post/getData",async ()=>{ // thunk action
    let dataJson = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await dataJson.json();
});

export const deleteDataThunk = createAsyncThunk("post/deleteData",async (id)=>{
    let dataJson = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
});

export const {resetData} = postSlice.actions;
export default postSlice.reducer;