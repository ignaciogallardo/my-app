import React from "react";
import { CreateButtonTodoUi } from "./CreateButtonTodoUI";

function CreateButtonTodo(props) {
    const onClickButton = () => {
        // Avtiva el modal
        props.setOpenModal(true);
    }

    return (
        <CreateButtonTodoUi
            onClickButton={onClickButton}
        />
    );
}

export { CreateButtonTodo };