import React from "react";
import "./itemTodo.css";

function ItemTodo(props){
    return(
    <li className={`itemTodo itemTodo ${props.completed && 'itemTodo--complete'}`}>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
            ✔
        </span>
        <p className={`itemTodo-p ${props.completed && 'itemTodo-p--complete'}`}>
            {props.text}
        </p>
        <span className="Icon Icon-delete"
        onClick={props.onDelete}
        >
            X
        </span>
    </li>
    );
}

export {ItemTodo};