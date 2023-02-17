import React from "react";
import { AiOutlineClear, AiOutlineSisternode } from "react-icons/ai";
import "./itemTodo.css";

function ItemTodo(props){
    return(
    <li className={`itemTodo itemTodo ${props.completed && 'itemTodo--complete'}`}>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
       
        >
            <AiOutlineSisternode/>
        </span>
        <p id="text" className={`itemTodo-p ${props.completed && 'itemTodo-p--complete'}`}>
           <strong>{props.text}</strong> 
        </p>
        <span className="Icon Icon-delete"
        onClick={props.onDelete}
        >
            <AiOutlineClear id="iconoEscoba"></AiOutlineClear>
        </span>
    </li>
    );
}

export {ItemTodo};