import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo} from "../../redux/actions";
import {todoListByFilterSelector,} from "../../redux/selector";
import Filter from "./Filter";

function TodoApp() {
    //hooks
    const [name, setName]= useState('');
    const dispatch = useDispatch();
    const list = useSelector(todoListByFilterSelector);

    console.log(list, "list")

    const handleChangeName = (e)=>{
        const {value,} = e && e.target;
        setName(value);
    }

    const handleSave = ()=>{
        if(name === ''){
            alert('Yeu cau nhap thong tin');
            return;
        }
        dispatch(addTodo(name))
        setName('');
    }

    const  handleDelete =(index)=>{
        dispatch(deleteTodo(index));
    }

    return (
        <div>
            Todo app
            <Filter/>
            <div>
                <input name="userName" placeholder="Nhap ten" value={name} onChange={handleChangeName}/>
                <button onClick={handleSave}>Save</button>
            </div>
            <div>
                {
                    (list || []).map((item, index)=>{
                        return (
                            <div key={index}>
                                <span>{item}</span>
                                <button onClick={()=>handleDelete(index)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoApp;