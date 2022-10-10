import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounterUI } from "./TodoCounterUI";

function TodoCounter() {
    const { todoCompleted, totalTodo } = React.useContext(TodoContext)
    
    return (
        <TodoCounterUI
            todoCompleted={todoCompleted}
            totalTodo={totalTodo}
        />
    );
}

// Obliga a exportar TodoCounter con dicho nombre
// A diferencia de export default el cual permite asignarle cualquier nombre al importar el componente
export { TodoCounter };