import React from "react";
import { TodoContext } from "../TodoContext";
import './progressBar.css'

function ProgressBar() {
    const {totalTodos, todosCompletos} = React.useContext(TodoContext);
    return(

        <div id="contenedorProgress">
            <progress id="progressBar" max={totalTodos} value={todosCompletos}>
                <span class="progressBarText">75%</span>
            </progress>
        </div>
        
    );
}

export {ProgressBar};