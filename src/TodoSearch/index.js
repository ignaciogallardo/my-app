import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoSearchUI } from "./TodoSearch";


function TodoSearch() {
    const { searchvalue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChage = (event) => {
        console.log(event.target.value);
        //Setea el valor del input
        setSearchValue(event.target.value);
    }

    return (
        <TodoSearchUI
            onSearchValueChage={onSearchValueChage}
            searchvalue={searchvalue}
        />
    );
}

export { TodoSearch };