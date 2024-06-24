import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {

  return (
    <div className='App'>
      <Item name = {'MacBook'} price = {100000} />
      <Item name = {'Pendrive'} price = {10000} />
      <Item name = {'Mobile'} price = {67000} />
      <Cart />
    </div>
  )
}

export default App
