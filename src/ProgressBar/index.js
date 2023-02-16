import React from "react";
import { TodoContext } from "../TodoContext";
import './progressBar.css'

function ProgressBar() {
    const {totalTodos, todosCompletos} = React.useContext(TodoContext);
    return(
    <>  
        {/* <div id="contenedorProgress"> */}
            <progress id="progressBar" max={totalTodos} value={todosCompletos}> 
            </progress> 
        {/* </div> */}
        
    </>
        
        
    );
}

export {ProgressBar};