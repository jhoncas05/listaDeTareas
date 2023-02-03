import React from "react";
import "./listaTodos.css";

function ListaTodos(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul> 
        </section>
    );
}

export {ListaTodos};