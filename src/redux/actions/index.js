import {ADD_TODO, DELETE_TODO, SEARCH_NAME_TODO} from "./actionTypes";

export const addTodo = (text)=>{
    return {
        type:ADD_TODO,
        payload:{text},
    }
}

export const deleteTodo =(index)=>{
    return {
        type: DELETE_TODO,
        payload:{index}
    }
}

export const searchNameTodo=(text)=>{
    return {
        type: SEARCH_NAME_TODO,
        payload: text
    }
}