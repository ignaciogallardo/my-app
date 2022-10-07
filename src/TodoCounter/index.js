import React from "react";
import { TodoCounterUI } from "./TodoCounterUI";

function TodoCounter({ todoCompleted, totalTodo }) {
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