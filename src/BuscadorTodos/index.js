import React from "react";
import './buscadorTodos.css';

function BuscadorTodos({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return( 
        <input 
        className="buscadorTodos" 
        placeholder="Nuevo ToDo"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {BuscadorTodos};