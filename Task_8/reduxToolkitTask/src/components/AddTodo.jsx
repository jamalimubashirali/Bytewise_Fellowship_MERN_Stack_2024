import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../Feature/Todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Enter Todo ...'
        name="" id="" value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Sumbit</button>
    </form>
  )
}

export default AddTodo