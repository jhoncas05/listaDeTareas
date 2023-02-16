import React from "react";
import { TodoContext } from "../TodoContext";
import "./contadorTodos.css";


function ContadorTodos(){
    const {totalTodos, todosCompletos} = React.useContext(TodoContext);
    return(
        <>
        <h2 className="contadorTodos"> <i className="bi bi-card-checklist">  </i>  Haz completado {todosCompletos} de {totalTodos} Tareas</h2>
        </>
        
    );
}

export {ContadorTodos};