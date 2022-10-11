import {SEARCH_NAME_TODO} from "../actions/actionTypes";
const initState = {
    searchName:'',
}
const filterReducer = (state=initState, action)=>{
    switch (action.type) {
        case SEARCH_NAME_TODO:{
            return {
                ...state,
                searchName: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default filterReducer;