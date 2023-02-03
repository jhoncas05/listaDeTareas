import React from "react";
import "./contadorTodos.css";


function ContadorTodos({total, completed}){
    return(
        <>
        <h2 className="contadorTodos">  Haz completado {completed} de {total} todos</h2>
        </>
        
    );
}

export {ContadorTodos};