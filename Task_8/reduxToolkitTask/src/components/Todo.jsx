import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../Feature/Todo/todoSlice'

const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>
            Todos
            {
                todos.map((todo) => (
                    <li key = {todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))
            }
        </div>
    </>
  )
}

export default Todo;