import React from "react";
import { TodoContext } from "../TodoContext";
import './progressBar.css'

function ProgressBar() {
    const {totalTodos, todosCompletos} = React.useContext(TodoContext);
    return(
        <progress id="progress" max={totalTodos} value={todosCompletos}></progress>
    );
}

export {ProgressBar};