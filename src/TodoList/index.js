import React from "react";

import { TodoListUI } from "./TodoListUI";

function TodoList(prosps) {
    return (
        <TodoListUI prosps={prosps} />
    );
}

export { TodoList };