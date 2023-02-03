import React from "react";
import { AppUi } from "./AppUI";

// const defaultTodos = [
//   {text: "cortar cebolla", completed: true},
//   {text: "curso introduccion a react", completed: false},
//   {text: "llorar con la llorona", completed: false},
//   {text: 'LALALALAA', completed: false }
// ]
function useLocalStorage(itemName){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1');
  
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

  return (
    <AppUi
      totalTodos={totalTodos}
      todosCompletos={todosCompletos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosBuscados={todosBuscados}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

    />
     );
}

export default App;
