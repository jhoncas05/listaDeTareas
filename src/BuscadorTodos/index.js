import React from "react";
import { TodoContext } from "../TodoContext";
import './buscadorTodos.css';

function BuscadorTodos(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return[  
        <input 
        className="buscadorTodos" 
        placeholder="Buscar ToDos "
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        <i id="lupa" className="bi bi-search"></i>
        
        
    ];
}

export {BuscadorTodos};