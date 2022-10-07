import React from "react";
import './TodoItem.css';

function TodoItemUI({prosps}) {
    return(
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${prosps.complete && 'Icon-check--active'}`}
                onClick={prosps.onComplete}>
                √
            </span>
            <p
                className={`TodoItem-p ${prosps.complete && 'TodoItem-p--complete'}`}
            >
                {prosps.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={prosps.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {TodoItemUI};