import {ADD_TODO, DELETE_TODO} from "../actions/actionTypes";
const initState ={
    list:[],
};

const todoReducer = (state = initState, action)=>{
    switch (action.type) {
        case ADD_TODO:{
            const newList = [...state.list];
            newList.push(action.payload.text);
            return {
                ...state,
                list:newList
            };
        }
        case DELETE_TODO:{
            const newList = state.list.filter((c, index)=> index !== action.payload.index);

            return {
                ...state,
                list:newList
            };
        }
        default:
            return state;
    }
}

export default todoReducer;