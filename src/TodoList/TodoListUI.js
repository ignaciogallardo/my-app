import React from "react";
import './TodoList.css';

function TodoListUI({prosps}) {
    return (
        <section>
            <ul>
                {/* Children llama al hijo dentro de la etiqueta (en este caso TodoItem) */}
                {prosps.children}
            </ul>
        </section>
    );
}

export { TodoListUI };