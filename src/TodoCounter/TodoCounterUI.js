import React from "react";
import './TodoCounter.css';

function TodoCounterUI({
    todoCompleted,
    totalTodo,
}) {
    return (
        <h2 className="TodoCounter">Has completado {todoCompleted} de {totalTodo}</h2>
    );
}

export { TodoCounterUI };