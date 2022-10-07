import React from "react";
import { TodoItemUI } from "./TodoItemUI";

function TodoItem(prosps) {
    return (
        <TodoItemUI prosps={prosps} />
    );
}

export { TodoItem };