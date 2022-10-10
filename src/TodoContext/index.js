import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    // Usamos el custom hook
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    // Crea estados para compartir con los hijos
    const [searchvalue, setSearchValue] = React.useState('');
    // Controla comportamiento del modal
    const [openModal, setOpenModal] = React.useState(false);

    // Filtra las completed en true
    const todoCompleted = todos.filter(todos => todos.completed).length;
    const totalTodo = todos.length;

    let searchTodos = [];

    if (!searchvalue.length >= 1) {
        searchTodos = todos;
    } else {
        //Devuelve la lista que coincide con el texto del buscador
        searchTodos = todos.filter(todo => {
            const todoTexto = todo.text.toLowerCase();
            const searchText = searchvalue.toLowerCase();
            return todoTexto.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        // Copia los todoList al nuevo array
        const newTodos = [...todos];
        //Alterna entre estados
        newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true;
        // todoList[todoIndex] = {
        //   text: todoList[todoIndex].text,
        //   completed: true
        // };
        //Guarda el resultado de la busqueda (cambia el estado forza el re render)
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        //Se le pasa index y cantidad a borrar
        newTodos.splice(todoIndex, 1);
        //Guarda el resultado de la busqueda luego de eliminarlo (cambia el estado forza el re render)
        saveTodos(newTodos);
    }

    // console.log('Render (antes use effect)');

    // React.useEffect(()=>{
    //   console.log('use effect');
    // },[totalTodo]);

    // console.log('Render (despues use effect)');

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            todoCompleted,
            totalTodo,
            searchvalue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
