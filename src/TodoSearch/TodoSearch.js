import React from "react";
import './TodoSearch.css';

function TodoSearchUI({
    onSearchValueChage,
    searchvalue,
}) {
    return (
        <input
            className="TodoSearch"
            placeholder='Text'
            value={searchvalue}
            onChange={onSearchValueChage}
        />
    );
}

export { TodoSearchUI };