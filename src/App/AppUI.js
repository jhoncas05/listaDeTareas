import React from "react";
import { ContadorTodos } from "../ContadorTodos";
import { BuscadorTodos } from "../BuscadorTodos";
import { ListaTodos } from "../ListaTodos";
import { ItemTodo } from "../ItemTodo";
import { BotonCrearTodo } from "../BotonCrearTodo";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm";


function AppUi() {
    const { error,
            loading,
            todosBuscados,
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
        } = React.useContext(TodoContext);

    return(
        <>
      <ContadorTodos/>
    <BuscadorTodos/>
    
            <ListaTodos>
                {error && <p>desesperate. hubo un error</p>}
                {loading && <p>estamos cargando no desesperes...</p>}
                {(!loading && !todosBuscados.length) && <p>Ya puedes crear tu primer todo!</p>}
    
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

        {!!openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}


    <BotonCrearTodo
        setOpenModal={setOpenModal}
    />
    </>
    );
};

export {AppUi}