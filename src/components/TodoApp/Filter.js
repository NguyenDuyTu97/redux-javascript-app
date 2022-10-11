import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterSelector} from "../../redux/selector";
import {searchNameTodo} from "../../redux/actions";

function Filter(){
    const dispatch = useDispatch();
    const searchName= useSelector(filterSelector);

    const handleSearchName = (e) => {
        const {value}= e && e.target;
        dispatch(searchNameTodo(value));
    }

    return(
        <div>
            <input name="filterName" placeholder="Tim kiem ten" value={searchName} onChange={handleSearchName}/>
        </div>
    )
}
export default Filter;