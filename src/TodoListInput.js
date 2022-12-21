import './TodoListInput.css';
import { useState } from 'react';

const TodoListInput = ({onAddTodo}) => {
    const[item, setItem] = useState("hello world");

    const handleInputChange = (event) => {
        setItem(event.target.value);
    };
    const handleClick = () => {
        onAddTodo(item);
        setItem("");
    };

    return (
        <div className="input-container">
            <input value= {item} type='text' onChange={handleInputChange}/> 
            <button onClick={handleClick}>Adicionar afazer</button>
        </div>
    );
};
export default TodoListInput;