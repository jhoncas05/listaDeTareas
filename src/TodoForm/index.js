import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css'
import Swal from 'sweetalert2'




function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
      addTodo,
      setOpenModal,
 
    } = React.useContext(TodoContext);

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };


    const onCancel = () => {
      setOpenModal(false);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if(newTodoValue.length <= 0){
        
      }else{
        addTodo(newTodoValue);
        setOpenModal(false);
      }
        
    };

    const onAlert = () => {
      if(newTodoValue.length <= 0 ){
          Swal.fire({
            icon: 'error',
            title: 'Oops, ocurrio un error...',
            text: 'No puedes añadir tareas vacias!'
          })
        }
      }

    return( 
        <form onSubmit={onSubmit} >
      <label>Añade una nueva tarea</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe tu tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick = {onCancel}
        >
          Cancelar <i id="circleCancel" className="bi bi-x-circle"></i>
        </button>

        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          onClick={onAlert}
        >
          Añadir <i id="circleAdd" className="bi bi-plus-circle"></i>
        </button>
      </div>
    </form>
    );
}

export {TodoForm}