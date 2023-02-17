import React from "react";
import './App.css'
import { ContadorTodos } from "../ContadorTodos";
import { BuscadorTodos } from "../BuscadorTodos";
import { ListaTodos } from "../ListaTodos";
import { ItemTodo } from "../ItemTodo";
import { BotonCrearTodo } from "../BotonCrearTodo";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm";
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import { EmptyTodos } from "../EmptyTodos";
import { ProgressBar } from "../ProgressBar";



function AppUi() {
    const { error,
            loading,
            todosBuscados,
            completeTodo, 
            deleteTodo,
            openModal,
            // toggleComplete,
            setOpenModal,
        } = React.useContext(TodoContext);

    return(
        <>
        <ProgressBar/>
      <ContadorTodos/>
    <BuscadorTodos/>
    

    
            <ListaTodos>
                {error && <TodosError error={error}/> }
                {loading && <TodosLoading/>}
                {(!loading && !todosBuscados.length) && <EmptyTodos/>}
    
            {todosBuscados.map(todo => (
                <ItemTodo 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                // onChange={() => toggleComplete(prevState => !prevState)}
                
                
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