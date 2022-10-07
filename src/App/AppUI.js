import React from "react";
import './App.css';

// Al no usar default en el componente debemos importar el elemento entre corchetes
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateButtonTodo } from '../CreateButtonTodo';
import { TodoSearch } from '../TodoSearch';

function AppUI({
    error,
    loading,
    todoCompleted,
    totalTodo,
    searchvalue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        // React permite solo una etiqueta por componente, para no enviar un <div></div> 
        // (crear varios div complica al CSS)
        // Utilizamos React.Fragment que es una etiqueta vacia
        <React.Fragment>
            <TodoCounter
                todoCompleted={todoCompleted}
                totalTodo={totalTodo}
            />
            <TodoSearch
                searchvalue={searchvalue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {/* Mensajes que se muestran antes de cargar la lista, dependiendo de su estado */}
                {error && <p>Hubo un error...</p>}
                {loading && <p>Estamos cargando su información...</p>}
                {(!error && !loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                
                {searchTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        complete={todo.completed}
                        onComplete={() => completeTodo(todo.text)} //En este caso todo.text es la key
                        onDelete={() => deleteTodo(todo.text)} //En este caso todo.text es la key
                    />
                ))}
            </TodoList>
            <CreateButtonTodo />
        </React.Fragment>
    );
}

export { AppUI };