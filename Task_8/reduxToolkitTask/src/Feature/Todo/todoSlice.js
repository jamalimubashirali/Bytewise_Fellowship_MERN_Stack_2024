import { createSlice , nanoid } from '@reduxjs/toolkit';


const initialState = {
    todos: [
        {
            id : 1,
            text : "Hello This Todo one",
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            const todoID = action.payload;
            const todo = state.todos.find((todo) => todo.id === todoID);
            state.todos.pop(todo);
        },
        updateTodo: (state, action) => {
            
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;