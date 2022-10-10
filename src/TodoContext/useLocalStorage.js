import React from "react";

// ReactHook
function useLocalStorage(itemName, initialValue) {
    // Estados de una API
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    //Array de TodoLista
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
  
      setTimeout(() => {
        try {
          //LocalStorage
          const LocalStorageItem = localStorage.getItem(itemName);
          let ParseItem;
  
          // Verifica si existe el item itemName
          if (!LocalStorageItem) {
            //Sino existe lo crea
            //Recibe un nombre y un string (solo permite string, por eso usamos JSON.stringify)
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            ParseItem = initialValue;
          } else {
            // Transforma a un objeto JS
            ParseItem = JSON.parse(LocalStorageItem);
          }
          setItem(ParseItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1500);
  
    });
  
    // Persistir los datos en localStorage
    const saveItem = (newItem) => {
      try {
        //Converte le lista a string
        const newItemString = JSON.stringify(newItem);
        //Guarda los cambios en localStorage
        localStorage.setItem(itemName, newItemString);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

export { useLocalStorage };