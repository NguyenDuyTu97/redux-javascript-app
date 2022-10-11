import todoReducer from "./todoReducer";
import {combineReducers} from "redux";
import filterReducer from "./filterReducer";

//combineReducer: gom nhom cac reducer
const rootReducer = combineReducers({
        todo:todoReducer,
        filter: filterReducer
    }
);
export default rootReducer;