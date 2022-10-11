import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterSelector} from "../../redux/selector";
import {decrement, increment} from "../../redux/reducers/counterSlice";

function Counter(){
    const dispatch = useDispatch();
    const counter = useSelector(counterSelector)

    return (
        <div>
            <div>
                <p>{counter}</p>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <button onClick={()=>dispatch(increment())}>+</button>
            </div>
        </div>
    )
}
export default Counter;
