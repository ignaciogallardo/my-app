import React from "react";
import { CreateButtonTodoUi } from "./CreateButtonTodoUI";

function CreateButtonTodo() {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <CreateButtonTodoUi
            onClickButton={onClickButton}
        />
    );
}

export { CreateButtonTodo };