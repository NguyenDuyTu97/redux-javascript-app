import {createSelector} from "@reduxjs/toolkit";
//createSelector: dung de tao ra selector dua vao nhieu selector khac.

export const todoListSelector = state => state.todo.list;
export const filterSelector = state => state.filter.searchName;

export const todoListByFilterSelector = createSelector(todoListSelector,filterSelector,(list, searchName)=>{
    if(searchName){
        let newList = list.filter(name=>name.includes(searchName));
        return newList;
    }

    return list;
});

// export const todoListByFilterSelector = (state)=>{
//     const {todo, filter} = state;
//     if(filter && filter.searchName){
//         let list = todo.list.filter(name=>name.includes(filter.searchName));
//         return list;
//     }
//
//     return todo.list;
// }

export const counterSelector = state => state.counter.value;

// POST_SELECTOR
export const postSelector = state=>state.post.list;
export const postLoadingSelector = state=>state.post.isLoading;




