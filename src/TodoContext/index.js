import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const 
     {
     item: todos,
     saveItem: saveTodos,
     loading,
     error
    } = useLocalStorage('TODOS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const todosCompletos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let todosBuscados = [];

  if(!searchValue.length >= 1){
    todosBuscados = todos;
  }else{
    todosBuscados = todos.filter(todo => {
      const textoTodo = todo.text.toLowerCase();
      const textoBuscado = searchValue.toLowerCase();
      return textoTodo.includes(textoBuscado);
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            todosCompletos,
            searchValue,
            setSearchValue,
            todosBuscados,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};