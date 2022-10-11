// import rootReducer from "../reducers";
// import {createStore} from "redux";
//
// const store=createStore(rootReducer);
// export default store;

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import postReducer from "../reducers/postSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        post: postReducer,
    }
})

export default store