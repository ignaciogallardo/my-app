import React from "react";
import './CreateButtonTodo.css';

function CreateButtonTodoUi({onClickButton}) {
    return(
        <button 
            className="CreateButtonTodo"
            onClick={onClickButton}
        >
            +
        </button> 
    );
}

export { CreateButtonTodoUi };