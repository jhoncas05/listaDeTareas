import React from "react";
import './todosLoading.css'

function TodosLoading(){
    return(
        <>
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando Tareas...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>

        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando Tareas...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>

        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando Tareas...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
        </>
        
        
    );
}

export {TodosLoading}