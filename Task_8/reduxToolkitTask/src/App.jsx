import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <div className='bg-slate-900 w-full h-screen overflow-auto p-10' >
        <AddTodo />
        <Todo />
      </div>
    </>
  )
}

export default App
