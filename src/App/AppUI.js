import React from "react";
import { ContadorTodos } from "../ContadorTodos";
import { BuscadorTodos } from "../BuscadorTodos";
import { ListaTodos } from "../ListaTodos";
import { ItemTodo } from "../ItemTodo";
import { BotonCrearTodo } from "../BotonCrearTodo";

function AppUi({
    totalTodos,
    todosCompletos,
    searchValue,
    setSearchValue,
    todosBuscados,
    completeTodo,
    deleteTodo
}) {
    return(
        <>
    <ContadorTodos
        total={totalTodos}
        completed={todosCompletos}
    />
    <BuscadorTodos
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    />
    

    <ListaTodos>
      {todosBuscados.map(todo => (
        <ItemTodo 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </ListaTodos>

    <BotonCrearTodo/>

    
    </>
    );
};

export {AppUi}