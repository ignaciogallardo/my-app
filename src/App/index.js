import React from 'react';
import { AppUI } from './AppUI';

import { TodoProvider } from '../TodoContext';

// const DefaultTodoLista = [
//   { text: "Estudiar P4", completed: true },
//   { text: "Estudiar SO2", completed: true },
//   { text: "Hacer ejercicio", completed: false }
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
