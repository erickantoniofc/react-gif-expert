import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if(!newInputValue) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs.." value={inputValue} onChange={onInputChange}/>
           
        </form>
        
    );
}