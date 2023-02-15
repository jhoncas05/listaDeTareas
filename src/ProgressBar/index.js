import React from "react";
import { TodoContext } from "../TodoContext";
import './progressBar.css'

function ProgressBar() {
    const {totalTodos, todosCompletos} = React.useContext(TodoContext);
    return(
        <div id="progress">
            <progress id="progress-bar" max={totalTodos} value={todosCompletos}>
                {/* <span class="progress-bar-text">75%</span> */}
            </progress>
        </div>
        
    );
}

export {ProgressBar};