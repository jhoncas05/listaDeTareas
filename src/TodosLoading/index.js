import React from "react";
import './todosLoading.css'

function TodosLoading(){
    return(
        <>

        <div className="LoadingTodo-container">
            <img id="logoCargando" className="LoadingTodo-completeIcon LoadingTodo-text LoadingTodo-deleteIcon" src="https://firebasestorage.googleapis.com/v0/b/react-images-bf61b.appspot.com/o/3579899.png?alt=media&token=665cbd7c-7804-4784-969d-2b3b69d81795" alt="estamos cargando..."></img>
        </div>

        </>
        
        
    );
}

export {TodosLoading}