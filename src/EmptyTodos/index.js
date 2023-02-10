import React from "react";
import './emptyTodos.css'

function EmptyTodos(){
    return(

        <div className="container" id="contenedorNoDisponible">
            <img id="imgNoDisponible" src="http://localhost:3000/2721299.png" alt="NoDisponible"></img>  
            <p id="textNoDisponible"><strong>No tienes tareas pendientes en este momento.</strong></p>
        </div>
    
        );
}

export {EmptyTodos}

// 