import React from "react";
import "./botonCrearTodo.css";

function BotonCrearTodo(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button 
        className="botonCrearTodo"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {BotonCrearTodo};