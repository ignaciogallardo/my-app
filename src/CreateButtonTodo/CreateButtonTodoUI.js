import React from "react";
import './CreateButtonTodo.css';

function CreateButtonTodoUi({onClickButton}) {
    return(
        <button 
            className="CreateButtonTodo"
            onClick={() => onClickButton('Esto es una alerta')}
        >
            +
        </button> 
    );
}

export { CreateButtonTodoUi };