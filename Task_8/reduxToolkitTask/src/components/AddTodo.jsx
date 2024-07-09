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
    <form onSubmit={addTodoHandler} className='my-5 flex justify-center'>
        <input type="text" placeholder='Enter Todo ...'
        name="" id="" value={input}
        onChange={(e) => setInput(e.target.value)}
        className='p-4 mx-2 rounded-xl w-80 border-none outline-none'
        />
        <button type='submit' className='py-4 px-10 bg-black text-white rounded-xl'>Sumbit</button>
    </form>
  )
}

export default AddTodo