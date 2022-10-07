import React from 'react';
import { AppUI } from './AppUI';

// const DefaultTodoLista = [
//   { text: "Estudiar P4", completed: true },
//   { text: "Estudiar SO2", completed: true },
//   { text: "Hacer ejercicio", completed: false }
// ];

// ReactHook

function useLocalStorage(itemName, initialValue) {
  // Estados de una API
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  //Array de TodoLista
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {

    setTimeout(() => {
      try {
        //LocalStorage
        const LocalStorageItem = localStorage.getItem(itemName);
        let ParseItem;

        // Verifica si existe el item itemName
        if (!LocalStorageItem) {
          //Sino existe lo crea
          //Recibe un nombre y un string (solo permite string, por eso usamos JSON.stringify)
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          ParseItem = initialValue;
        } else {
          // Transforma a un objeto JS
          ParseItem = JSON.parse(LocalStorageItem);
        }
        setItem(ParseItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500);

  });

  // Persistir los datos en localStorage
  const saveItem = (newItem) => {
    try {
      //Converte le lista a string
      const newItemString = JSON.stringify(newItem);
      //Guarda los cambios en localStorage
      localStorage.setItem(itemName, newItemString);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  // Usamos el custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // Crea estados para compartir con los hijos
  const [searchvalue, setSearchValue] = React.useState('');

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
    <AppUI
      error={error}
      loading={loading}
      todoCompleted={todoCompleted}
      totalTodo={totalTodo}
      searchvalue={searchvalue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
