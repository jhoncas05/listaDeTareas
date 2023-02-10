import React from "react";
import './emptyTodos.css'

function EmptyTodos(){
    return(

        <div className="container" id="contenedorNoDisponible">
            <img id="imgNoDisponible" src="https://firebasestorage.googleapis.com/v0/b/react-images-bf61b.appspot.com/o/2721299.png?alt=media&token=6c7c535b-178b-4c83-b91a-6156777979ec" alt="NoDisponible"></img>  
            <p id="textNoDisponible"><strong>No tienes tareas pendientes en este momento.</strong></p>
        </div>
    
        );
}

export {EmptyTodos}

//comentario
