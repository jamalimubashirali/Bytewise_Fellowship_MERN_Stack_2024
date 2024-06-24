import React, {useContext} from 'react'
import { CounterContext} from '../context/CounterContext'

const Counter = () => {
    const counterContext = useContext(CounterContext);
    const styles = {
        padding : '20px',
        margin: '10px'
    }
  return (
    <div>
        <button style = {styles}  onClick={() => counterContext.setCount(counterContext.count + 1)}>
            Increament
        </button>
        <button style = {styles} onClick={() => counterContext.setCount(counterContext.count - 1)}>
            Decreament
        </button>
    </div>
  )
}

export default Counter