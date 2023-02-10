import React from "react";
import './todosLoading.css'

function TodosLoading(){
    return(
        <>

        <div className="LoadingTodo-container">
            <img id="logoCargando" className="LoadingTodo-completeIcon LoadingTodo-text LoadingTodo-deleteIcon" src="http://localhost:3000/3579899.png" alt="estamos cargando..."></img>
        </div>

        </>
        
        
    );
}

export {TodosLoading}