import React from "react";

import { TodoSearchUI } from "./TodoSearch";


function TodoSearch({ searchvalue, setSearchValue }) {
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

    //Retorna un array
    // return [
    //     <input
    //         className="TodoSearch"
    //         placeholder='Text'
    //         value={searchvalue}
    //         onChange={onSearchValueChage}
    //     />,
    //     // Muestra en pantalla el valor
    //     <p>{searchvalue}</p>
    // ];
}

export { TodoSearch };